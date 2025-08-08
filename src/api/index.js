import axios from 'axios';

// Use maintained API provider
const url = 'https://disease.sh/v3/covid-19';

 export const fetchData = async (country) => {
     // disease.sh endpoints: /all (global) or /countries/{country}?strict=true
     let changeableUrl = `${url}/all`;
     if (country) {
         changeableUrl = `${url}/countries/${encodeURIComponent(country)}?strict=true`;
     }
     try {
         const { data } = await axios.get(changeableUrl);
         const confirmed = { value: data.cases };
         const recovered = { value: data.recovered };
         const deaths = { value: data.deaths };
         const lastUpdate = new Date(data.updated).toISOString();
         return { confirmed, recovered, deaths, lastUpdate };
     } catch (error) {
         console.log(error);
         // Return a safe fallback to avoid crashing consumers
         return {};
     }
 }
export const fetchDailyData = async () => {
    try {
        // historical/all returns cumulative counts by date
        const { data } = await axios.get(`${url}/historical/all?lastdays=all`);
        const timeline = data && data.timeline ? data.timeline : data;
        const casesByDate = timeline && timeline.cases ? timeline.cases : {};
        const deathsByDate = timeline && timeline.deaths ? timeline.deaths : {};

        const modifiedData = Object.keys(casesByDate)
            .sort((a, b) => new Date(a) - new Date(b))
            .map((dateKey) => ({
                confirmed: casesByDate[dateKey],
                deaths: deathsByDate[dateKey] || 0,
                date: dateKey,
            }));
        return modifiedData;
    } catch (error) {
        console.log(error);
        // Return empty list on failure
        return [];
    }
}
export const fetchCountries = async () => {
    try {
        // Returns an array of country objects with 'country' as the name
        const { data } = await axios.get(`${url}/countries`);
        const countriesArray = Array.isArray(data) ? data : [];
        return countriesArray.map((c) => c.country).filter(Boolean);
    } catch (error) {
        console.log(error);
        // Return empty list on failure
        return [];
    }
}
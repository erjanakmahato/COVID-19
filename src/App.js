import React from 'react';
import {Cards,Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from  './api';
import coronaImage from './images/image.png';

class App extends React.Component {

state={
    data:{},
    country:'',
}



async componentDidMount(){
    const fetchedData=await fetchData();
this.setState({data:fetchedData});

}

handleCountryChange = async(country)=>{
const fetchedData = await fetchData(country);
this.setState({data:fetchedData, country:country});
 
    //set the state
}

    render(){
        const{data,country}=this.state;
        return(
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                        <h1 className={styles.title}>COVID-19 Tracker</h1>
                        <p className={styles.subtitle}>Real-time global coronavirus statistics</p>
                    </div>
                </header>
                <main className={styles.main}>
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country} />
                </main>
            </div>
        )
    }
}
export default App;
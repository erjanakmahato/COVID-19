import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker=({handleCountryChange})=>{

const [fetchedCountries,setFetchedCountries]=useState([]);

useEffect(()=>{
    const fetchAPI=async ()=>{
        const list = await fetchCountries();
        setFetchedCountries(Array.isArray(list) ? list : []);

    }
    fetchAPI();
},[setFetchedCountries]);

    return(
        <div style={{textAlign: 'center', margin: '1.5rem 0'}}>
            <h3 className={styles.title}>
                Select Country
            </h3>
            <FormControl className={styles.formControl}>
                <NativeSelect 
                    defaultValue="" 
                    onChange={(e)=>handleCountryChange(e.target.value)}
                    className={styles.select}
                    inputProps={{
                        className: styles.select
                    }}
                >
                    <option value="" className={styles.option}>Global</option>
                    {fetchedCountries.map((country,i)=>
                        <option key={i} value={country} className={styles.option}>
                            {country}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default CountryPicker;
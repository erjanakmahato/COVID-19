import React, {useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart=({data:{confirmed, recovered, deaths}, country})=>{

    const[dailyData,setDailyData]=useState([]);

   useEffect(()=>{
       const fetchAPI=async ()=>{
       setDailyData(await fetchDailyData());

       }
      fetchAPI();
       
   },[]);

   const lineChart=(
       dailyData.length
       ?(
       <Line
       data={{
           labels:dailyData.map(({date})=>date),
           datasets:[{
               data:dailyData.map(({confirmed})=>confirmed),
               label:'Infected',
               borderColor:'#e53e3e',
               backgroundColor: 'rgba(229, 62, 62, 0.1)',
               fill:true,
               borderWidth: 2,
               pointBackgroundColor: '#e53e3e',
               pointBorderColor: '#fff',
               pointBorderWidth: 2,
               pointRadius: 4,
               pointHoverRadius: 6,

           }, {
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'#718096',
            backgroundColor: 'rgba(113, 128, 150, 0.1)',
            fill:true,
            borderWidth: 2,
            pointBackgroundColor: '#718096',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,

           }],
       }}
       options={{
           responsive: true,
           maintainAspectRatio: false,
           plugins: {
               legend: {
                   labels: {
                       font: {
                           size: 14,
                           weight: '600'
                       },
                       padding: 20
                   }
               }
           },
           scales: {
               y: {
                   beginAtZero: true,
                   grid: {
                       color: 'rgba(0, 0, 0, 0.1)'
                   },
                   ticks: {
                       font: {
                           size: 12
                       }
                   }
               },
               x: {
                   grid: {
                       color: 'rgba(0, 0, 0, 0.1)'
                   },
                   ticks: {
                       font: {
                           size: 12
                       }
                   }
               }
           }
       }}
       height={400}
/>):null
   );

const barChart=
(
    confirmed
    ?(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgba(229, 62, 62, 0.8)',
                    'rgba(56, 161, 105, 0.8)',
                    'rgba(113, 128, 150, 0.8)',
                ],
                borderColor: [
                    '#e53e3e',
                    '#38a169',
                    '#718096'
                ],
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false,
                data:[confirmed.value, recovered.value, deaths.value]
            }]

        }}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend:{display:false},
                title:{
                    display:true, 
                    text:`Current state in ${country}`,
                    font: {
                        size: 16,
                        weight: '600'
                    },
                    color: '#2d3748'
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 14,
                            weight: '600'
                        }
                    }
                }
            }
        }}
        height={400}
        />
    ):null
);
   
    return(
        <div className={styles.container}>
            <div className={styles.chartTitle}>
                {country ? `COVID-19 Statistics for ${country}` : 'Global COVID-19 Statistics'}
            </div>
            <div className={styles.chartWrapper}>
                {country ? barChart:lineChart}
            </div>
        </div>
    )
}
export default Chart;
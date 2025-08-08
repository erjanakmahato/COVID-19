import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';
import CountUp from 'react-countup';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return (
            <div className={styles.container}>
                <div style={{textAlign: 'center', padding: '2rem', color: '#718096', fontSize: '1rem'}}>
                    Loading COVID-19 data...
                </div>
            </div>
        );
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent className={styles.cardContent}>
                        <Typography className={styles.cardTitle}>Infected</Typography>
                        <Typography className={styles.cardNumber}>
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.cardDescription}>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent className={styles.cardContent}>
                        <Typography className={styles.cardTitle}>Recovered</Typography>
                        <Typography className={styles.cardNumber}>
                            <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.cardDescription}>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent className={styles.cardContent}>
                        <Typography className={styles.cardTitle}>Deaths</Typography>
                        <Typography className={styles.cardNumber}>
                            <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","/>
                        </Typography>
                        <Typography className={styles.cardDate}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography className={styles.cardDescription}>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}
export default Cards;
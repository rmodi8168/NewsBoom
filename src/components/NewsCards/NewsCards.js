import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography,Box } from '@material-ui/core';

import useStyles from './style.js'


const infoCards = [
    { color: 'rgb(84, 7, 7)', title: 'Latest Indian News', text: 'Give me the latest news' },
    { color: 'rgb(23, 63, 6)', title: 'News by Sources', info: 'BBC News, Ansa, IGN, Buzzfeed, CNN etc.', text: 'Give me the news from CNN' },
    { color: 'rgb(171, 171, 21)', title: 'News by Categories', info: 'Business, General, Health, Sports, Entertainment, Science, Technology', text: 'Give me the latest Sports news' },
    { color: 'rgb(39, 13, 124)', title: 'News by Terms', info: 'TCS, Coronavirus, Smartphones, Narendra Modi etc.', text: 'What about Coronavirus' },
    
];

const weatherCards=[
    {color: 'rgb(84, 7, 7)', title: 'Current Weather', info:`Today's weather`, text: 'What is the weather today in New Delhi?'},
    {color: 'rgb(23, 63, 6)', title: 'Weather Prediction', info:' Prediction for next 5 days', text: 'What will be the weather in Mumbai tomorrow?' },
    {color: 'rgb(171, 171, 21)', title: 'Specific Update', info:'Prediction for next 5 days', text: 'Will it rain in Patna on 10th July?'},
    {color: 'rgb(39, 13, 124)', title: 'Temperature in different units', info:'Metric, Standard, Imperial, Celsius, Farenheit',text: 'Follow-up:And in celsius?'}
];


const NewsCards = ({ articles,activeArticle }) => {

    const classes = useStyles();

    if (!articles.length) {
        return (
            <Box>
                <Box className={classes.boxCard}>
                            <div className={classes.newsheader} style={{ backgroundColor: '#1565c0'  }}>
                                <Typography variant="h5">NEWS</Typography>
                            </div>
                        </Box>
                <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? (<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:</strong><br />{infoCard.info}</Typography>) : null}
                            
                            <Typography variant="h6">Try Saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                    </Grid>
                   <Box className={classes.boxCard}>
                            <div className={classes.newsheader} style={{ backgroundColor: '#1565c0' }}>
                                <Typography variant="h5">WEATHER</Typography>
                            </div>
                        </Box>

                    <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    {weatherCards.map((weatherCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: weatherCard.color }}>
                                <Typography variant="h5">{weatherCard.title}</Typography>
                                <Typography variant="h6"><strong>Info</strong>: <br />{weatherCard.info}</Typography>
                            
                            <Typography variant="h6">Try Asking: <br /> <i>{weatherCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                    </Grid>
                
            </Box>
        );
    }


    return (
        <Grow in>

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>

                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}


            </Grid>


        </Grow>
    )
}

export default NewsCards
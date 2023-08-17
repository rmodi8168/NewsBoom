import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import useStyles from './styles.js';

import NewsCards from "./components/NewsCards/NewsCards";
const alanKey = '714b8c0d3a4c30eb7e80f7b89f8073e42e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    const logo = require('./Screenshot.png');
    const classes = useStyles();

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newsHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${'https://img3.goodfon.com/wallpaper/nbig/2/49/globus-svetilnik-fon.jpg'})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <div className={classes.logoContainer}>
                <img src={logo} alt="Logo" className={classes.logo} />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>

    )
}

export default App;
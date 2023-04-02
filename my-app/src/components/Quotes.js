import React, {useState, useEffect} from 'react';
import {IoLogoTwitter} from "react-icons/io";
import {ImTumblr} from "react-icons/im";
const Quotes=()=>{
    const [quote, setQuote]= useState('');
    const [author, setAuthor]= useState('');

useEffect(()=>{
    getquote()
}, []);

    const  getquote=()=>{
        let url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            let  dataQuotes=data.quotes;
            let randomNum=Math.floor(Math.random()* dataQuotes.length);
            let randomQuote=dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })

    }

const handleClick=()=>{
    getquote();
}

    return(
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>
            <div id="buttons">
                <div className="social-media">
                    <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet-quote" rel="noopener noreferrer">
                        <span><IoLogoTwitter/></span>
                    </a>
                    <a href={`https://tumblur.com/intent/tweet?text=${quote}`} id="tumblr-quote" target="_blank">
                        <span><ImTumblr/></span>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>

    )
}
export default Quotes;
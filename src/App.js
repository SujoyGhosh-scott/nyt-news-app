import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './Article';
import axios from "./axios"

function App() {
  const [results, setResults] = useState([])
  const getnews = () => {
    axios.get('/content/all/all.json?api-key=ZYNlgVKOoHYVSC1cwSghLQS88SKduIP8')
    .then((res) => {
      //console.log(res.data.results)
      setResults(res.data.results)
    })
  }

  /*
  const getnews = () => {
    axios.get(`/content/all/all.json?api-key=${process.env.REACT_APP_KEY}`)
    .then((res) => {
      //console.log(res.data.results)
      setResults(res.data.results)
    })
  }
  */

  useEffect(() => {
    getnews()
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img src="https://logodownload.org/wp-content/uploads/2019/05/the-new-york-times-logo.png" alt="headerLogo" />
      </div>
      <div className="app__body">
        {
          results.map((result) => (
            <Article key={result.title} result={result} />
          ))
        }
      </div>
      <p className="cp">Copyright (c) 2021 The New York Times Company.  All Rights Reserved.</p>
    </div>
  );
}

export default App;

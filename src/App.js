import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

import Subreddit from "./pages/subpage/Subreddit";
import HomePage from "./pages/homepage/Home"
import Button from "./components/Button";

function App() {

    const [topRedditPosts, setTopRedditPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [allData, setAllData] = useState([]);


    useEffect(() => {
            async function fetchData() {
                try {
                    const result = await axios.get(`https://www.reddit.com/hot.json?limit=100`);
                    setAllData(result.data.data.children);
                } catch
                    (e) {
                    console.error(e);
                }
            }
            fetchData()
        } , []
    )

    useEffect(() => {
        if (allData) {
            const listOfTen = allData.filter((item, index) => {
                if(pageNumber === 0) {
                if (index >= 0 && index < 10) {
                        return (item)
                    }
                } else if (index >= (pageNumber * 10) && index < ((pageNumber * 10) + 10)) {
                        return (item)
                }
                    return false;

            })
            setTopRedditPosts(listOfTen);
        }

        },
        [pageNumber, allData])


  return (

     <Router>
         <Switch>
             <Route exact path="/">
                 <HomePage topRedditPosts={topRedditPosts}
                           pageNumber={pageNumber}
                    button={<Button
                        next={() => {setPageNumber(pageNumber + 1)}}
                        previous={() => {setPageNumber(pageNumber -1)}}
                        disabledNext={pageNumber === ((allData.length / 10) - 1 ) && 'toTop'}
                        disabledPrevious={pageNumber === 0}
                        pageNumber={pageNumber + 1}
                           />}
                 />
             </Route>

             <Route exact path="/:id"><Subreddit topRedditPosts={topRedditPosts}/></Route>
         </Switch>
     </Router>
  );
}

export default App;

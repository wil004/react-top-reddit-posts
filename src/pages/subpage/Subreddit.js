import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState } from "react";
import axios from "axios";
import './Subreddit.css';
import svgImage from '../assets/loadingIcon.gif'

function Subreddit ({topRedditPosts}) {
    const [subData, setSubData] = useState('');

    const history = useHistory();
    function goBack() {
        history.push("/");
    }

    const {id} = useParams();

    const chosenId = topRedditPosts.find((item, index) => {
        return id === item.data.id;
    })



    useEffect(() => {
            async function fetchData() {
                try {
                    if(chosenId) {
                        const result = await axios.get(`https://www.reddit.com/r/${chosenId.data.subreddit}/about.json`);
                        setSubData(result.data);
                    }
                } catch
                    (e) {
                    console.error(e);
                }
            }

            fetchData()
        }, [chosenId]
    )

    return (
        <div>
            {subData ?
                <section className="subredditPage">
                        <h1 className="subredditTitle">{subData && subData.data.display_name}</h1>
                        <img className="subredditBannerImage" src={subData.data.header_img} alt="" />
                        <h1 className="descriptionHeader">{subData && subData.data.public_description}</h1>
                    <a href={`https://www.reddit.com${subData.data.url}`} target="_blank" rel="noreferrer">
                        <h1>Go to Reddit page</h1>
                    </a>
                    <div className="subredditInfo">
                        <h1>Active user count: {subData.data.active_user_count.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.")}</h1>
                        <h1>Subscribers: {subData.data.subscribers.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.")}</h1>
                    </div>
                        <img className="subredditImage" src={subData.data.icon_img} alt="" />
                        <h3 className="description">{subData && subData.data.submit_text}</h3>
                        <img className="subredditImage" src={subData.data.banner_img} alt="" />
                        <p></p>
                        <button className="goBackButton" onClick={goBack}>
                            click here to go back</button>
                </section>
            :
                <div>
                    <h1>Page is still loading please wait...</h1>
                    <img src={svgImage} alt="" />
                </div>}

          </div>
    )
}

export default Subreddit
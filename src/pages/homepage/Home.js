import React from "react";
import {NavLink} from "react-router-dom";
import redditLogo from './homeassets/redit-logo.png'
import './Home.css';
import loadingSvg from '../assets/loadingIcon.gif'
function HomePage({topRedditPosts, button, pageNumber}) {

    return (
      <main>
          {pageNumber === 0 ? <h1 className="mainTitle">Top 100 hottest reddit posts</h1> : <h2 className="subMainTitle" id="top">
             Numbers {pageNumber * 10 + 1} - {pageNumber * 10 + 11}
          </h2>}
          {topRedditPosts.length > 0 && button}

            {topRedditPosts.length > 0 ?
                topRedditPosts.map((item, index) => {
                return (
                <div className="posts" key={item.data.id}>
                        <h2 className="subredditHeader">{pageNumber * 10 + index + 1}. {item.data.subreddit}</h2>
                    <NavLink to={item.data.id} >
                        <h2>{item.data.title}</h2>
                    </NavLink>
                        <img className="homeImage" alt="" width="400" height="300" src={item.data.thumbnail.includes('http') ? item.data.thumbnail : redditLogo} />
                    <a className="redditAnchor" href={`https://www.reddit.com/${item.data.subreddit_name_prefixed}` } target="_blank" rel="noreferrer">
                        <p className="aUrl">Go to reddit page: {item.data.subreddit_name_prefixed}  |
                        comments: {item.data.num_comments.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.")}
                        ups: {item.data.ups.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.")}
                        </p>
                    </a>
                </div>
                )
                })   :
                <div>
                        <h1>Page is still loading please wait...</h1>
                        <img src={loadingSvg} alt="" />
                </div>}
          {topRedditPosts.length > 0 && button}
        </main>
    )
}

export default HomePage
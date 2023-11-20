import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PostMessage from "../Components/PostMessage/PostMessage";

function Home() {
  /*
    Front End Team:
    - topLikedMessage is an array that stores the top 3 most liked messages in the database
    - setTopLikedMessages is the function that changes topLikedMessage

    - topTrendyUsers is an array that stores the top 3 most trendy users
    - setTopTrendyUsers is the function that changes topLikedMessage

    Backend Team: 
    - topLikedMessages should contain Message objects
    - topTrendyUseres should contain Profile objects
    */
  const [topLikedMessages, setTopLikedMessages] = useState([]);
  const [topTrendyUsers, setTopTrendyUsers] = useState([]);

  //this will run when the page renders
  useEffect(() => {
    //call an algorithm to access the database, obtain the top 3 most liked messages, and store to a variable top3MostLikedMessages
    const top3MostLikedMessages = ["apple", "bannana", "orange"];
    setTopLikedMessages(top3MostLikedMessages);

    //call an algorithm to access the database, obtain the top 3 most trendy users, and store to a variable top3MostTrendyUsers
    const top3MostTrendyUsers = ["user1", "user2", "user3"];
    setTopLikedMessages(top3MostTrendyUsers);
  }, []);
  return (
    <div className="home">
      <NavBar />
      <div>This is the main content area</div>
      <PostMessage />
    </div>
  );
}

export default Home;

import React from "react";
import { useState, useEffect } from "react";


//Component where users write their message and post it (store in backend)
function PostMessage() {
  /*
  Frontend Team:
  - postMessage() is a function that takes in content (text, image, videos, or combinations of these) and reloads the page

  Backend Team:
  - postMessage() should take in relevant information and add it to the database of messages
  */
  const [state, setState] = React.useState({
    wordCount: 0, 
    charCount: 0
  });
  
  const handleKeyPress = (e) => {
    const count = e.target.value;
    
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length; 
      }
    }
    
    setState({
      wordCount: countWords(count),
      charCount: count.length
    });
  }
//_______________________________________________________________________________________________________________________________________

    function updateDateTime() {
      // create a new `Date` object
      const now = new Date();
  
      // get the current date and time as a string
      const currentDateTime = now.toLocaleString();
  
      // update the `textContent` property of the `span` element with the `id` of `datetime`
      document.querySelector('#datetime').textContent = currentDateTime;
    }
    setInterval(updateDateTime, 1000);
//_______________________________________________________________________________________________________________________________________
  let [likeNumber, setLikeNumber] = useState(0);
  let [dislikeNumber, setDislikeNumber] = useState(0);

  function handleLikeClick(){
    return(
      setLikeNumber(likeNumber +=1)
    )
  }
  function handleDislikeClick(){
    return(
      setDislikeNumber(dislikeNumber +=1)
    )
  }
//_______________________________________________________________________________________________________________________________________
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
//_______________________________________________________________________________________________________________________________________
  const postMessage = (e) => {
    //edit this
    console.log("posted message");
  }

  return (
    <div className="postMessage">
      <form onSubmit={postMessage}>
        <label htmlFor="message">Post Your Message:</label>
        <input
          type="text"
          id="postMessage-message"
          name="message"
          onChange={handleKeyPress}
          required
        ></input>
        <br/><br/>
        <button onClick={handleLikeClick}>Likes</button>
        <h3>{likeNumber} Likes</h3>
        <button onClick={handleDislikeClick}>Dislikes</button>
        <h3>{dislikeNumber} Dislikes</h3>
        <label>choose a file! </label>
        <input class="choosePhoto" type="file" name="picture"></input>
        <label>choose a video!
          <input name="file" type="file" size="50" accept="video/*" id="file"/> 
        </label>        
        <button id="btn">
            Submit
        </button>    
        <p> Word Count: 
          <span className='num'> {state.wordCount}</span>
        </p>   
        <date>
          <span id="datetime">{state.updateDateTime}</span>
        </date>
      </form>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default PostMessage;
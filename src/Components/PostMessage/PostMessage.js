import React from "react";
import { Link } from "react-router-dom";


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

  //const date = new Date();

  //let day = date.getDate();
  //let month = date.getMonth() + 1;
  //let year = date.getFullYear();
  //let hour = date.getHours();
  //let minute = date.getMinutes();
  //let second = date.getSeconds();
  
  // This arrangement can be altered based on how we want the date's format to appear.
  //let currentDate = `${day}/${month}/${year}`;
  //let currentTime = `${hour}:${minute}:${second}`;
  //console.log(currentDate);
  //console.log(currentTime);  // "17-6-2022"


    function updateDateTime() {
      // create a new `Date` object
      const now = new Date();
  
      // get the current date and time as a string
      const currentDateTime = now.toLocaleString();
  
      // update the `textContent` property of the `span` element with the `id` of `datetime`
      document.querySelector('#datetime').textContent = currentDateTime;
    }
    setInterval(updateDateTime, 1000);

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
        <input class="choosePhoto" type="file" name="picture"></input>
        <input class="photoOk" type="submit" value="this is the picture!"></input>
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
      <Link to="/BadWordDemo"> BadWords </Link>
    </div>
  );
}
export default PostMessage;
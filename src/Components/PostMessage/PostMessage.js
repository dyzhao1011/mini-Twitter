import React from "react";

//Component where users write their message and post it (store in backend)
function PostMessage() {
  /*
  Frontend Team:
  - postMessage() is a function that takes in content (text, image, videos, or combinations of these) and reloads the page

  Backend Team:
  - postMessage() should take in relevant information and add it to the database of messages
  */
  const postMessage = (e) => {
    //edit this
    console.log("posted message");
  };
  return (
    <div className="postMessage">
      <form onSubmit={postMessage}>
        <label htmlFor="message">Post Your Message:</label>
        <input
          type="text"
          id="postMessage-message"
          name="message"
          required
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostMessage;

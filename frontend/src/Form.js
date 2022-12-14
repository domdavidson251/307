import React, { useState } from "react";
var UsernameGenerator = require('username-generator');

function Form(props) {
  const [review, setReview] = useState({
    author: UsernameGenerator.generateUsername(),
    date: new Date(),
    stars: "0",
    upvotes: 0,
    downvotes: 0,
    review: "",
  });

  function submitForm() {
    console.log(review);
    props.handleSubmit(review);
    setReview({
      author: UsernameGenerator.generateUsername(),
      date: new Date(Date.now()),
      stars: "0",
      upvotes: 0,
      downvotes: 0,
      review: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "star")
      setReview({
        author: review["author"],
        date: review["date"],
        stars: value,
        upvotes: review["upvotes"],
        downvotes: review["downvotes"],
        review: review["review"],
      });
    else if (name === "review")
      setReview({
        author: review["author"],
        date: review["date"],
        stars: review["stars"],
        upvotes: review["upvotes"],
        downvotes: review["downvotes"],
        review: value,
      });
  }

  return (
    <form>
      <label htmlFor="Menu Item">Menu Item</label>
      <div className="txt-center">
        <form>
          <div className="rating">
            <input
              id="star5"
              name="star"
              type="radio"
              value="5"
              className="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star5">☆</label>
            <input
              id="star4"
              name="star"
              type="radio"
              value="4"
              className="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star4">☆</label>
            <input
              id="star3"
              name="star"
              type="radio"
              value="3"
              className="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star3">☆</label>
            <input
              id="star2"
              name="star"
              type="radio"
              value="2"
              className="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star2">☆</label>
            <input
              id="star1"
              name="star"
              type="radio"
              value="1"
              className="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star1">☆</label>
            <div className="clear"></div>
          </div>
        </form>
      </div>

      <div className="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          className="form-control"
          maxlength="500"
          type="text"
          name="review"
          id="review"
          value={review.review}
          rows="3"
          onChange={handleChange}
        ></textarea>
      </div>
      <a href="/">
        <input type="button" value="Submit" onClick={submitForm} />
      </a>
    </form>
  );
}

export default Form;

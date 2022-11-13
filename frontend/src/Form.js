import React, { useState } from "react";
import usernameGen from "username-gen";

function Form(props) {
  const [review, setReview] = useState({
    author: usernameGen.generateUsername(
      Math.floor(Math.random() * 15) + 5,
      false
    ),
    date: "",
    stars: "0",
    upvotes: 0,
    downvotes: 0,
    review: "",
  });

  function submitForm() {
    props.handleSubmit(review);
    setReview({
      author: usernameGen.generateUsername(
        Math.floor(Math.random() * 15) + 5,
        false
      ),
      date: "",
      stars: "0",
      upvotes: 0,
      downvotes: 0,
      review: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "date")
      setReview({
        author: review["author"],
        date: value,
        stars: review["stars"],
        upvotes: review["upvotes"],
        downvotes: review["downvotes"],
        review: review["review"],
      });
    else if (name === "star")
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
      <div class="txt-center">
        <form>
          <div class="rating">
            <input
              id="star5"
              name="star"
              type="radio"
              value="5"
              class="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star5">☆</label>
            <input
              id="star4"
              name="star"
              type="radio"
              value="4"
              class="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star4">☆</label>
            <input
              id="star3"
              name="star"
              type="radio"
              value="3"
              class="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star3">☆</label>
            <input
              id="star2"
              name="star"
              type="radio"
              value="2"
              class="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star2">☆</label>
            <input
              id="star1"
              name="star"
              type="radio"
              value="1"
              class="radio-btn hide"
              onChange={handleChange}
            />
            <label for="star1">☆</label>
            <div class="clear"></div>
          </div>
        </form>
      </div>

      <div class="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          class="form-control"
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

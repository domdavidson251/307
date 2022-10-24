import React, {useState} from 'react';

function Form(props){
    const[review, setReview] = useState(
        {
            username: '',
            date: '',
            stars: 0,
            upvotes: 0,
            downvotes: 0,
            review: ''
        }
    );

    function handleChange(event){
        const{name, value} = event.target;
        if(name === "username")
            setReview(
                {
                    username: value, 
                    date: review['date'],
                    stars: review['stars'],
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    review: review['review']
                }
            );
        else if(name === "date")
            setReview(
                {
                    username: review['username'], 
                    date: value,
                    stars: review['stars'],
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    review: review['review']
                }
            );
        else if(name === "stars")
            setReview(
                {
                    username: review['username'], 
                    date: review['date'],
                    stars: value,
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    review: review['review']
                }
            );
        else
            setReview(
                {
                    username: review['username'], 
                    date: review['date'],
                    stars: review['stars'],
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    review: value
                }
            );
    }

    function submitForm() {
        props.handleSubmit(review);
        setReview({name: '', job: ''});
      }

    return (
        <form>
            <label htmlFor="Username">Username</label>
            <input
                type="text"
                name="Username"
                id="Username"
                value={review.username}
                onChange={handleChange} />
            <label htmlFor="Date">Date</label>
            <input
                type="date"
                name="Date"
                id="Date"
                value={review.date}
                onChange={handleChange} />
            <label htmlFor="Stars">Stars</label>
            <input
                type="number"
                name="Stars"
                id="Stars"
                value={review.stars}
                onChange={handleChange} />
            <label htmlFor="Review">Review</label>
            <input
                type="text"
                name="Review"
                id="Review"
                value={review.review}
                onChange={handleChange} />
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    );
}



export default Form;
import React, {useState} from 'react';

function Form(props){
    const[review, setReview] = useState(
        {
            username: '',
            date: '',
            stars: '0',
            upvotes: 0,
            downvotes: 0,
            description: ''
        }
    );

    function submitForm() {
        props.handleSubmit(review);
        setReview(
            {
                username: '',
                date: '',
                stars: '0',
                upvotes: 0,
                downvotes: 0,
                description: ''
            });
      }

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
                    description: review['review']
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
                    description: review['review']
                }
            );
        else if(name === "star")
            setReview(
                {
                    username: review['username'], 
                    date: review['date'],
                    stars: value,
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    description: review['review']
                }
            );
        else if(name === 'review')
            setReview(
                {
                    username: review['username'], 
                    date: review['date'],
                    stars: review['stars'],
                    upvotes: review['upvotes'],
                    downvotes: review['downvotes'],
                    description: value
                }
            );
    }

    return (
        <form>
            <label htmlFor="Menu Item">Menu Item</label>
            <div class="txt-center">
                <form>
                    <div class="rating">
                        <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" onChange={handleChange}/>
                        <label for="star5">☆</label>
                        <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" onChange={handleChange}/>
                        <label for="star4">☆</label>
                        <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" onChange={handleChange}/>
                        <label for="star3">☆</label>
                        <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" onChange={handleChange}/>
                        <label for="star2">☆</label>
                        <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" onChange={handleChange}/>
                        <label for="star1">☆</label>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>

            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={review.username}
                onChange={handleChange} />
            
            <div class="form-group">
                <label for="Review">Review</label>
                <textarea 
                    class="form-control" 
                    maxlength="100"
                    type="text"
                    name="review"
                    id="review"
                    value={review.description}
                    rows="3"
                    onChange={handleChange}></textarea>
            </div>
            <input type="button" value="Submit" onClick={submitForm} />
        </form>
    );
}

export default Form;
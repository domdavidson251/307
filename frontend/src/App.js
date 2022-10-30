import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './header';
import axios from 'axios';

function App() {
  const [testStateVar, setTestStateVar] = useState();

  useEffect(() => {
    fetchAll().then(result => {
      if (result) { 
        setTestStateVar(result);
      }
    });
  }, [testStateVar]);

  async function fetchAll(){
    try {
      const response = await axios.get('http://localhost:4000/');
      console.log(response);
      return response;
    } catch (error) {
      console.log(error); 
      return false;         
    }
  }
  
  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
      <HeaderComp></HeaderComp>
      <div class="container mt-4">
        <div class="row">
            <div class="col-auto mb-3">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
            <div class="col-auto mb-3">
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {/*<a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  ); 
}

export default App;
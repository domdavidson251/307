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
      <HeaderComp></HeaderComp>
      <div class="row">
        <div class="col-sm-6">
        <div class="card">
          {//<img class="card-img-top" src="..." alt="Card image cap">
}
          <div class="card-body">
            <p class="card-text">Restaurant1</p>
          </div>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="card">
          {//<img class="card-img-top" src="..." alt="Card image cap">
}
          <div class="card-body">
            <p class="card-text">Restaurant2</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  ); 
}

export default App;
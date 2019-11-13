import React, {useState, useEffect} from 'react';
import Szymon from './components/Szymon';

const App = () => {
  const [data,setData] = useState();
  const url = 'http://localhost:5000/';

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setData(json);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      Hello react
      {data ? <Szymon name={data.name} surname={data.surname} iq={data.iq}/> : <p>Loading...</p>}
    </div>
  )
}

export default App;

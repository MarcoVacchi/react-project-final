import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [array, setArray] = useState([]);
  const endPoint = ("http://127.0.0.1:8080/automobili/api");
  const fetchAutomobili = () => {
    axios.get(endPoint)
      .then(res => {
        console.log(res.data)
        setArray(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(fetchAutomobili, []);
  return <div>
    <div className='container'>
      <ul>
        {array.map((ele, index) => (
          <li key={index}>{ele.modello}</li>
        ))}

      </ul>
    </div>
  </div>

}

export default App

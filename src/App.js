import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');
  const [listItems, setListItems] = useState([]);

  const inputChanged = (event) => {
    setTodo(event.target.value);
    setDate(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setListItems([listItems, todo]);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        Description:
        <input type="text" onChange={inputChanged} value={todo}/>
        Date:
        <input type="text" onChange={inputChanged} value={date}/>
        <input type="Submit" value="add"/>
      </form>
      <table><tbody>
        {listItems.map((item, index) =>
          <tr key={index}>
            <td>{item}</td>
          </tr>)
        }
      </tbody></table>
    </div>
  );
}

export default App;

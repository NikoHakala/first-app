import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState({desc: '', date: ''});

  const [listItems, setListItems] = useState([]);

  const inputChanged = (event) => {
    setTodos({...todos, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setListItems([...listItems, todos]);
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        Description:
        <input type="text" onChange={inputChanged} name="desc" value={todos.desc}/>
        Date:
        <input type="text" onChange={inputChanged} name="date" value={todos.date}/>
        <input type="Submit" value="add"/>
        
        <table><tbody>
          {listItems.map((item, index) =>
            <tr key={index}>
              <td>{item.desc}</td>
              <td>{item.date}</td>
            </tr>)
          }
        </tbody></table>
      </form>
    </div>
  );
}

export default App;
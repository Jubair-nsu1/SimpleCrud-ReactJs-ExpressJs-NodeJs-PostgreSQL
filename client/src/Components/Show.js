import React, { Fragment, useEffect, useState } from "react";
import Update from "./Update";

const Show = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <div className="list-group width='200'">
      <table className="table mt-5 table-hover table-dark">
        
        <thead >
          <tr className="bg-primary">
            <th >Description</th>
            <th >Edit</th>
            <th >Delete</th>
          </tr>
        </thead>
        
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td >{todo.description}</td>
              <td><Update todo={todo}/></td>
              <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>      
      </table>
      </div>
    </Fragment>
  );
};

export default Show;
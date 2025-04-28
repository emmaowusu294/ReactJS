import { useEffect, useState } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todo-item';

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      console.log(result);
      if (result?.todos && result.todos.length > 0) {
        setTodoList(result.todos);
        setLoading(false);
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('No data found');
      }
    } catch (error) {
      console.log(error);
      setErrorMsg('Something went wrong');
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);

    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const result = await apiResponse.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App Using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

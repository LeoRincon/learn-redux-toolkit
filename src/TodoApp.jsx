import { useState } from 'react';
import { useGetTodoByIdQuery /* useGetTodosQuery*/ } from './store/apis';

export const TodoApp = () => {
  // const { isLoading, data: todos = [] } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { isLoading, data: todo } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>TODO's - RTK Query</h1>
      <hr />
      <h4>{isLoading ? 'loading...' : ''}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {' '}
            <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};

import { useState } from 'react';
import './App.css';
import TodoList from "./components/todoList";

function App() {

  const [content, setContent] = useState<string>('');

  const [todoList, setTodoList] = useState<string[]>([]);

  const addItem = () => {
    setTodoList([...todoList, content]);
  }

  return (
    <main>
      <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoList todoList = {todoList}/>
    </main>
  );
}

export default App;

import TodoItem from 'components/todoItem';
import React from 'react'


export default function TodoList({ todoList }: { todoList: any[] }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item: any) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

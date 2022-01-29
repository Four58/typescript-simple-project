import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (data: string) => {
    const newList = new Todo(data);
    console.log(todoList);
    setTodoList((prevTodo) => {
      return prevTodo.concat(newList);
    });
    console.log(todoList);

    // const listItem = todoList;
    // const superList = listItem.concat(newList);
    // setTodoList(superList);
    // console.log(todoList);
  };

  const onRemoveHandler = (todoId: string) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todoList,
    addTodo: addTodoHandler,
    removeTodo: onRemoveHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

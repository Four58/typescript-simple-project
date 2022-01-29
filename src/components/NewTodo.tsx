import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    //React.MouseEvent for onClick
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // ? means typescript will check if it successfully access value or not
    // if not enteredText will be null
    // if we sure that it will definitely know value and not be null, use ! instead
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo List</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;

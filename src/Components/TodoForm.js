import React,{useContext, useState} from "react";
import { 
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
} from "reactstrap";

import {v4} from "uuid";
import {TodoContext} from "../Context/TodoContext";
import {ADD_TODO, ADD_TOOD} from "../Context/action.types";

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoString === ""){
            return alert("Please Enter A Todo");
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo

        })

        setTodoString("");
    };


    return(
       <Form onSubmit={handleSubmit}>
           <FormGroup>
               <InputGroup>
               <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your Next Todo"
                value={todoString} 
                onChange={event => setTodoString(event.target.value)}
               />
                <Button
                    color="warning"
                    //oncllick
                >
                    ADD
                </Button>
               </InputGroup>
           </FormGroup>
       </Form>
    );
}

export default TodoForm;
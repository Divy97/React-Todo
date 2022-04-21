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
import {ADD_TOOD} from "../Context/action.types";

const TodoForm = () => {
    return(
       <Form>
           <FormGroup>
               <InputGroup>
               <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your Next Todo"
                // value
                // onchange
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
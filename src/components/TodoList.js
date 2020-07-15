import React,{useState} from 'react'
import Todo from './Todo'
export default function TodoList() {
    let todo1 = {
        'id' : '1',
        'title' : 'clean room'
    }
    let todo2 = {
        'id' : '2',
        'title' : 'wash clothes'
    }


    let [listTodos, setListTodos] = useState([todo1, todo2]);


    return (
        <div>
            <Todo todos={listTodos}/>
        </div>
    )
}

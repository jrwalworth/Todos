import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import './Todo.css';

const Add = (props) => {
    const { todoArray, setTodoArray, task, setTask } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const todoTask = {
            task: task,
            complete: false,
        };
        setTodoArray([...todoArray, todoTask]);
        setTask('');
    }

    return (
        <Form className="todo" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" value={task} placeholder="Add To-Do" onChange={(e) => setTask(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="dark">Add To-Do</Button>
        </Form>
    );
}

export default Add;

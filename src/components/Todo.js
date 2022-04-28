import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Todo.css';

const Todo = (props) => {
    const {task, index, todoArray, setTodoArray} = props;
    const toggleComplete = (task) => {
        const updatedTask = {...task, completed: !task.completed}
        const updatedTasks = todoArray.map((item, i) => {
            if (task ===i) {
                task.complete = updatedTask;
            } return task;
    }); 
    setTodoArray(updatedTasks);
    };
    const handleDelete = () => {
        const filterTodoArray = todoArray.filter((task, i) => i !== index);
        setTodoArray(filterTodoArray);
    };

    return (
        <Card className='task-card'>
            <input type="checkbox" name="complete" id="complete" checked={task.complete} onChange={toggleComplete}/>
            <h5>{task.text}</h5>
            <Button className='deleteBtn' variant='primary' onClick={handleDelete}>Delete</Button>
        </Card>
    );
}

export default Todo;

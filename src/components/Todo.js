import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Todo.css';

const Todo = (props) => {
    const {task, index, todoArray, setTodoArray} = props;

    const toggleComplete = (task) => {
        const updatedTask = {...task, complete: !task.complete};
        const updatedTasks = todoArray.map((item) => {
            if (task === item) {
                item = updatedTask;
            } return item;
    }); 
    setTodoArray(updatedTasks);
    };

    const handleDelete = () => {
        const filterTodoArray = todoArray.filter((task, i) => i !== index);
        setTodoArray(filterTodoArray);
    };

    return (
        <Card className='taskcard'>
            <input type="checkbox"  checked={task.complete} onChange={() => toggleComplete(task)}/>
            <h5 className={task.complete ? 'completed' : ''}>{task.task}</h5>
            <Button className='deleteBtn' variant='primary' onClick={handleDelete}>Delete</Button>
        </Card>
    );
}

export default Todo;

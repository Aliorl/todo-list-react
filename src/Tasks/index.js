import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id} className={`tasks__item${task.done && hideDone ? "tasks__item--hidden" : ""}`}>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasks__item${task.done ? "tasks__item tasks__item--done" : "tasks__item"}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
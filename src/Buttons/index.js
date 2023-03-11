import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDoneTasks ? "Show" : "Hide"} Done Tasks
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Mark All Tasks As Done
                </button>
            </>
        )}
    </div>
);

export default Buttons;
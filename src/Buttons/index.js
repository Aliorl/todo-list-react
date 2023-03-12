import "./style.css";

const Buttons = ({ tasks, hideDone }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDone ? "Show" : "Hide"} Done Tasks
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
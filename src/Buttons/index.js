import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="section__buttons">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {hideDoneTasks ? "Show" : "Hide"} Done Tasks
                </button>
                <button
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Mark All Tasks As Done
                </button>
            </>
        )}
    </div>
);

export default Buttons;
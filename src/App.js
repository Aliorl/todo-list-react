import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "do shopping", done: false },
    { id: 2, content: "go for a walk", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="To Do List App" />

      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="To Do List"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} />
        }
      />
    </Container >
  );
}

export default App;

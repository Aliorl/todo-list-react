import logo from './toDoList.svg';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "do shopping", done: false },
  { id: 2, content: "go for a walk", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>

      <Header title="To Do List App" />

      <Section
        title="Add new task"
        body={
          <Form />
        }
      />

      <Section
        title="To Do List"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />

    </Container >
  );
}

export default App;

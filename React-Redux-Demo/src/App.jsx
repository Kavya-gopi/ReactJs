import { useState } from "react";
import CustomerAdd from "./CustomerAdd";
import { Provider } from "react-redux";
import { store } from "./Store";
import CustomerView from "./CustomerView";
import Title from "./CrudAppProject/Title";
import TodoApp from "./CrudAppProject/TodoApp";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TableTodo from "./CrudAppProject/Table";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Title />
        <Row className="justify-content-md-center">
          <Col lg="6">
            <TodoApp />

            <TableTodo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

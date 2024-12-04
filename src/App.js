import React, { useState } from 'react';
import {Form,Button ,Row,Col,Card,Container} from 'react-bootstrap';
import './App.css'
function App() {
  const [inputNumber, setInputNumber] = useState('');
  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <Container className='inputFormLayout'>
      <Row>
      <Col>
    <Card>
    <Card.Header><h2>String Calculator</h2></Card.Header>
    <Card.Body className="d-flex align-items-center">
      <Card.Text>
      <Form >
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Enter String: </Form.Label>
     <Form.Control placeholder="Please Enter a String"
     className='form-group'
        id="strings"
        value={inputNumber}
        onChange={handleInputChange} />
     </Form.Group>
    </Form>
      </Card.Text>
      <Button variant="primary" type="button">Calculate</Button>
    </Card.Body>
  </Card>
  </Col>
</Row>
</Container>
  );
}

export default App;
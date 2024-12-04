import React, { useState } from 'react';
import {Form,Button ,Row,Col,Card,Container} from 'react-bootstrap';
import './App.css';
import { add } from './calculator';  // Import the calculator logic
function App() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const resultValue = add(inputString);
      setResult(resultValue);
      setError('');
    } catch (e) {
      setError(e.message);
      setResult('');
    }
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
        value={inputString}
        onChange={handleInputChange} />
     </Form.Group>
    </Form>
      </Card.Text>
      <Button variant="primary" type="button" onClick={handleCalculate}>Calculate</Button>
    </Card.Body>
  </Card>
  <div>
        {result !== '' && <p>Result: {result}</p>}
        {error !== '' && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
  </Col>
</Row>
</Container>
  );
}

export default App;
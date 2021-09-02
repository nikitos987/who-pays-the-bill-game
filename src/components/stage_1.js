import React, { useState, useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

import { MyContext } from '../context';

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      console.log(value);
    } else {
      console.log('error');
    }
  };

  const validateInput = (value) => {
    if (value === '') {
      setError([true, 'Sorry, you need to add something']);
      return false;
    }
    if (value.length <= 2) {
      setError([true, 'Sorry, you need at least 3 characters']);
      return false;
    }
    return true;
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>

        <Button className="miami" variant="primary" type="submit">
          Add player
        </Button>
      </Form>
    </>
  );
};

export default Stage1;

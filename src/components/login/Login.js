import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoginForm = ({ email, password, handleOnChange, handleOnSubmit, handleFormTypeChange }) =>
{
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr/>
          <Form autoComplete="off" onSubmit={ handleOnSubmit }>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" value={ email } onChange={ handleOnChange } />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter Password" value={ password } onChange={ handleOnChange } />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={ () => handleFormTypeChange('reset-password')}>Forgot Password?</a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes =
{
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleFormTypeChange: PropTypes.func.isRequired
};

export default LoginForm;
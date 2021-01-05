import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PasswordReset = ({ email, handleOnChange, handleOnPasswordReset, handleFormTypeChange }) =>
{
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr/>
          <Form autoComplete="off" onSubmit={ handleOnPasswordReset }>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" value={ email } onChange={ handleOnChange } required />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={ () => handleFormTypeChange('login')}>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes =
{
  email: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnPasswordReset: PropTypes.func.isRequired,
  handleFormTypeChange: PropTypes.func.isRequired
};

export default PasswordReset;
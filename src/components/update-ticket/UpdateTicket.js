import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) =>
{
  return (
    <Form onSubmit={ handleOnSubmit }>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Submit your reply here or update the ticket</Form.Text>
      <Form.Control as="textarea" row="5" name="detail" value={ message } onChange={ handleOnChange } />
      <div className="text-right my-3">
        <Button variant="info" type="submit">Submit</Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes =
{
  message: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
};

export default UpdateTicket;
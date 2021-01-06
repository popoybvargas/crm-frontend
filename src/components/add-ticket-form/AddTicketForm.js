import { Jumbotron, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './add-ticket-form.css';

const AddTicketForm = ({ formData, handleOnChange, handleOnSubmit }) =>
{
  return (
    <Jumbotron className="mt-3 pt-4 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={ handleOnSubmit }>
        <Form.Group as={ Row }>
          <Form.Label column sm={ 3 }>Subject</Form.Label>
          <Col sm={ 9 }>
            <Form.Control name="subject" placeholder="Enter Subject" value={ formData.subject } onChange={ handleOnChange } />
          </Col>
        </Form.Group>
        <Form.Group as={ Row }>
          <Form.Label column sm={ 3 }>Date Issued</Form.Label>
          <Col sm={ 9 }>
            <Form.Control type="date" name="dateIssued" value={ formData.dateIssued } onChange={ handleOnChange } />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" rows="5" name="details" value={ formData.details } onChange={ handleOnChange } />
        </Form.Group>
        <Button block variant="info" type="submit">Submit</Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes =
{
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired
};

export default AddTicketForm;
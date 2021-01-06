import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm';
import { validLength } from '../../utils/validation';

const initialFormData = { subject: '', dateIssued: '', details: '' };

const NewTicket = props =>
{
  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = e =>
  {
    e.preventDefault();

    for (let key in formData)
    {
      if (!formData[key]) return alert(`${key} field is required!`);
      
      if (!validLength(formData[key])) return alert(`${key} should be between 3-100 characters long!`);
    }
    console.log(formData);
  };

  const handleOnChange = e =>
  {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm formData={ formData } handleOnChange={ handleOnChange } handleOnSubmit={ handleOnSubmit } />
        </Col>
      </Row>
    </Container>
  );
};

export default NewTicket;
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';

import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';

const Ticket = () =>
{
  const [ticket, setTicket] = useState(tickets[0]);
  const [ticketConversation, setTicketConversation] = useState(ticket.history);
  const [message, setMessage] = useState('');

  const handleOnChange = e =>
  {
    setMessage(e.target.value);
  };

  const handleOnSubmit = e =>
  {
    e.preventDefault();
    const today = new Date();
    const newMessage =
    {
      messageBy: 'client',
      date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      message
    };
    setTicketConversation([ ...ticketConversation, newMessage ]);
    setMessage('');
    setTicket({ ...ticket, history: ticketConversation });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: { ticket.subject }</div>
          <div className="date">Date Opened: { ticket.addedAt }</div>
          <div className="status">Status: { ticket.status }</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory conversation={ ticketConversation } />
        </Col>
      </Row>
      <hr/>
      <Row className="mt-4">
        <Col>
          <UpdateTicket message={ message } handleOnChange={ handleOnChange } handleOnSubmit={ handleOnSubmit } />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
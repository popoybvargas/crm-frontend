import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';

const TicketList = props =>
{
  const [searchStr, setSearchStr] = useState('');
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  const handleOnChange = e =>
  {
    setSearchStr(e.target.value);
    filterTickets();
  };

  const filterTickets = () =>
  {
    const ticketResults = tickets.filter(ticket => ticket.subject.toLowerCase().includes(searchStr.toLowerCase()));
    setFilteredTickets(ticketResults);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/tickets/new">
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm searchStr={ searchStr } handleOnChange={ handleOnChange } />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <TicketTable tickets={ filteredTickets } />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketList;
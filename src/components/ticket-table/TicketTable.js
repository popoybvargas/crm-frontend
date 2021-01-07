import { Table } from 'react-bootstrap';

const TicketTable = ({ tickets }) =>
{
  const renderRows = () =>
  {
    if (!tickets || !tickets.length) return <tr className="text-center"><td colSpan="4">No ticket found</td></tr>;

    return tickets.map(ticket => (
      <tr key={ ticket.id }>
        <td>{ ticket.id }</td>
        <td>{ ticket.subject }</td>
        <td>{ ticket.status }</td>
        <td>{ ticket.addedAt }</td>
      </tr>
    ));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Date Opened</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </Table>
  );
};

export default TicketTable;
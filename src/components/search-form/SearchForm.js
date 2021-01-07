import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SearchForm = ({ searchStr, handleOnChange }) =>
{
  return (
    <Form>
      <Form.Group as={ Row }>
        <Form.Label column sm="2">Search:</Form.Label>
        <Col sm="10">
          <Form.Control name="searchStr" value={ searchStr } onChange={ handleOnChange } placeholder="Search ..." />
        </Col>
      </Form.Group>
    </Form>
  );
};

SearchForm.propTypes =
{
  searchStr: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default SearchForm;
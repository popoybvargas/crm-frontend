import { Breadcrumb } from 'react-bootstrap';

import './breadcrumb.css';

const BreadCrumb = ({ page }) =>
{
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{ page }</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
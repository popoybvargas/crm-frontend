import { Jumbotron } from 'react-bootstrap';

import './entry.style.css';
import LoginForm from '../../components/login/Login';
import PasswordReset from '../../components/password-reset/PasswordReset';
import { useState } from 'react';

const Entry = () =>
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState('login');

  const handleOnChange = e =>
  {
    const { name, value } = e.target;
    
    switch (name)
    {
      case 'email': return setEmail(value);
      case 'password': return setPassword(value);
      default: return;
    }
  };

  const handleOnSubmit = e =>
  {
    e.preventDefault();

    if (!email || !password) return alert('all fields are required!');

    // TODO: call API to submit the form
    console.log(email, password);
  };

  const handleOnPasswordReset = e =>
  {
    e.preventDefault();

    if (!email) return alert('your email address is required!');

    // TODO: call API to submit the form
    console.log(email);
  };

  const handleFormTypeChange = type => setFormType(type);
  
  const renderForm = () =>
  {
    if (formType === 'login') return <LoginForm email={ email } password={ password } handleOnChange={ handleOnChange } handleOnSubmit={ handleOnSubmit } handleFormTypeChange={ handleFormTypeChange} />;
    else return <PasswordReset email={ email } handleOnChange={ handleOnChange } handleOnPasswordReset={ handleOnPasswordReset } handleFormTypeChange={ handleFormTypeChange } />;
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        { renderForm() }
      </Jumbotron>
    </div>
  );
};

export default Entry;
import React, { useState }from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { Auth } from "aws-amplify";
import LoaderButton from '../components/LoaderButton';
import { useFormFields } from '../libs/hooksLib';
import FacebookButton from '../components/FacebookButton';

export default function Login(props) {
  const [isLoading, setisLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function handleFbLogin() {
    props.userHasAuthenticated(true);
  }
  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setisLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      setisLoading(false);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FacebookButton
        onLogin={handleFbLogin}
        />
        <hr />
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
          autoFocus
          type="email"
          value={fields.email}
          onChange={handleFieldChange}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl
        type="password"
        value={fields.password}
        onChange={handleFieldChange}
        />
        </FormGroup>
        <LoaderButton
        block
        bsSize="large"
        disabled={!validateForm()}
        type="submit"
        isLoading={isLoading}>
          {/* disables the form if validateform returns false */}
          Login
        </LoaderButton>
      </form>
    </div>
  );
}

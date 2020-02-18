import React, { useState } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap' ;
// The credit card number form is provided by the Stripe React SDK through the CardElement component
import { CardElement, injectStripe } from 'react-stripe-elements';
import LoaderButton from './LoaderButton';
import { useFormFields } from '../libs/hooksLib';
import './BillingForm.css';

function BillingForm(props) {
  let isLoading = props.isLoading;
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    storage: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  isLoading = isProcessing || isLoading;

  function validateForm() {
    return (
      fields.name !== "" &&
      fields.storage !== "" &&
      isCardComplete
    );
  }

  async function handleSubmitClick(event) {
    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({ name: fields.name});

    setIsProcessing(false);

    props.onSubmit(fields.storage, { token, error });
  }

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      <FormGroup bsSize="large" controlId="storage">
        <ControlLabel>Storage</ControlLabel>
        <FormControl
        min="0"
        type="number"
        value={fields.storage}
        onChange={handleFieldChange}
        placeholder="Number of notes to store"
        />
      </FormGroup>
      {/* horizontal break to separate content */}
      <hr />
      <FormGroup bsSize="large" controlId="name">
        {/* &apos;s escaping 's */}
        <ControlLabel>Cardholder&apos;s name</ControlLabel>
        <FormControl
        type="text"
        value={fields.name}
        onChange={handleFieldChange}
        placeholder="Name on the card"
        />
      </FormGroup>
      <ControlLabel>Credit Card Info</ControlLabel>
      <CardElement
      className="card-field"
      onChange={e => setIsCardComplete(e.complete)}
      style={{ base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif'}
    }}
      />
      <LoaderButton
      block
      type="submit"
      bsSize="large"
      isLoading={isLoading}
      disabled={!validateForm()}
      >
        Purchase
      </LoaderButton>
    </form>
  );
}
// wrapping the component using a stripe module injectStipe HOC (higher order component) gives us access to props.stripe.createToken method
export default injectStripe(BillingForm);
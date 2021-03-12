import React, { useState } from "react" 
import { useForm } from '../hooks/useForm'

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// };

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };
  const [firstName, setFirstName, handleFirstName] = useForm("")
  const [lastName, setLastName, handleLastName] = useForm("")
  const [address, setAddress, handleAddress] = useForm("")
  const [city, setCity, handleCity] = useForm("")
  const [state, setState, handleState] = useForm("")
  const [zipcode, setZipcode, handleZipcode] = useForm("")

  const resetValues = e => {
    e.preventDefault()
    setShowSuccessMessage(true)
    setFirstName("")
    setLastName("")
    setAddress("")
    setCity("")
    setState("")
    setZipcode("")
  }

  return (
    <>
      <form onSubmit={resetValues}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={e => handleFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={e => handleLastName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={e => handleAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={e => handleCity(e.target.value)} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={e => handleState(e.target.value)} />
        </label>
        <label>
          Zip:
          <input name="zipcode" value={zipcode} onChange={e => handleZipcode(e.target.value)} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zipcode}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

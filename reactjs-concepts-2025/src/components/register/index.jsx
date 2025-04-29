import CommonForm from '../common-form';
import { useState } from 'react';
import { registerFormElements } from '../config';

const initialFormData = {
  name: '',
  email: '',
  password: '',
};

function RegisterComponent() {
  const [registerFormData, setRegisterFormData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();

    //api logic and database logic

    setRegisterFormData(initialFormData);
  }
  return (
    <div>
      <h1>Register Page</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={'Register'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default RegisterComponent;

import { useState } from 'react';
import CommonForm from '../common-form';
import { loginFormElements } from '../config';

const initialFormData = {
  email: '',
  password: '',
  bio: '', // for textarea
  agree: false, // for checkbox
};

function LoginComponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();

    //api logic and database logic

    setLoginFormData(initialState);
  }
  return (
    <div>
      <h1>Login Page</h1>
      <CommonForm
        formControls={loginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={'Login'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default LoginComponent;

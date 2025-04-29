export const loginFormElements = [
  {
    name: 'email',
    id: 'email',
    placeholder: 'Enter Your Email',
    label: 'Email',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    id: 'password',
    placeholder: 'Enter Your Password',
    label: 'Password',
    componentType: 'input',
    type: 'password',
  },{
    name: 'agree',
    id: 'agree',
    label: 'I agree to the terms and conditions',
    componentType: 'checkbox',
    type: 'checkbox'
  }
  , {
    name: 'message',
    id: 'message',
    placeholder: 'Type your message...',
    label: 'Message',
    componentType: 'textarea',
  }
];

export const registerFormElements = [
  {
    name: 'name',
    id: 'name',
    placeholder: 'Enter Your Name',
    label: 'Name',
    componentType: 'input',
    type: 'text',
  },{
    name: 'email',
    id: 'email',
    placeholder: 'Enter Your Email',
    label: 'Email',
    componentType: 'input',
    type: 'email',
  },
  {
    name: 'password',
    id: 'password',
    placeholder: 'Enter Your Password',
    label: 'Password',
    componentType: 'input',
    type: 'password',
  }, {
    name: 'role',
    id: 'role',
    label: 'User Role',
    componentType: 'select',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ],
  }
  
];

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ContactUs from './email.js'

import { useState } from 'react';
import { send } from 'emailjs-com';

function App() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_5nq44wr', 'template_tpq4i3c',
      toSend,
      'KHLQuaAFa0JltxlpR'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
            <form onSubmit={onSubmit}>
        <input
          type='text'
          name='from_name'
          placeholder='from name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='to_name'
          placeholder='to name'
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
         <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

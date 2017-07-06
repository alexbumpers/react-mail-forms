import React from 'react';
import { Form, Input, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
const FormItem = Form.Item;
const nodemailer = require('nodemailer');
const addressSize = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const bodySize = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
class App extends React.Component {

  render() {
      function handleClick (emailClick) {
        emailClick.preventDefault();
        alert("Sent!");

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Your email service', // e.g., 'Gmail'
            auth: {
                user: 'yourusername',
                pass: 'yourpassword'
            }
        });

        // send mail with defined transport object
        transporter.sendMail({
            from: 'Your Email',
            to: 'Their Email',
            subject: 'Hi!',
            text: 'Hello world!'
});
    }


    return (

      <div className="App">
        <h1> Quick, simple emails with React and Node.</h1>
        <br/>
        <Form>
          <FormItem
            {...addressSize}
            label="     "
          >
          <Input placeholder="Email address" />
          </FormItem>
          <FormItem
            {...bodySize}
            label="     " color="white"
          >
          <Input placeholder="Your message here..." type="textarea" rows={8} id="success" />
          <br/>
          </FormItem>
          <div className="EmailButton" onClick={handleClick}><Button type="primary"> Send </Button></div>
        </Form>

      </div>

    );
  }
}

export default App;

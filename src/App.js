import React from 'react';
import { Form } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
const FormItem = Form.Item;
// const formItemLayout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 8 },
// };
// const formTailLayout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 8, offset: 4 },
// };

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form type="textarea">
            <FormItem rows={4} label="Email address"></FormItem>
        </Form>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SimpleForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: null,
      
  //   }
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.input.value);
  //   this.setState({ inputValue: e.target.input.value });
  // }


  render() {
    return (
     <div>

     <Form style={{ margin: '25px' }} >
        <Form.Group>
          <Form.Label>Enter some text</Form.Label>
          <Form.Control name="input" as="select" placeholder="type something please!" onChange={this.props.filterHorns}> 
          <option value=''>all</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>Many</option>
            </Form.Control>
        </Form.Group>
        {/* <Button type="submit">Submit</Button> */}
        {/* <Toast> */}
          {/* <Toast.Body>{this.state.inputValue}</Toast.Body> */}
        {/* </Toast> */}
      </Form>
      
      
     </div>
    )
  }
}

export default SimpleForm;
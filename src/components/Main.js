import { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import list from '../components/data.json'
import Results from './Results'
import BeastModal from './BeastModal.js';
import SimpleForm from './Form.js';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentBeast: { image_url: null },
      beastList: list,
      show: false
    }
  }
  filterHorns = (e) => {
    console.log(e)
    let numberOfHorns = parseInt(e.target.value)
    if (!numberOfHorns) {
     //changes current value in state
      this.setState({ beastList: list })
    } else if (numberOfHorns === 4) {
      let filteredList = list.filter(creature => 3 < creature.horns)
      this.setState({ beastList: filteredList })
    }
    else {
      let filteredList = list.filter(creature => numberOfHorns === creature.horns)
      this.setState({beastList: filteredList})
      console.log('this is filtered list:' ,filteredList)
      console.log('this is the number of horns:',numberOfHorns);
    }
  }
  handleClose = () => this.setState({ show: false });
  handleShow = (beast) => this.setState({ currentBeast: beast, show: true });
  render() {
    return (
      <>
        <SimpleForm
          filterHorns={this.filterHorns} />
        <Results currentBeast={this.state.currentBeast} />
        {this.state.beastList.map((beast, i) => <HornedBeast key={i} beast={beast} handleShow={this.handleShow} />)}
        <BeastModal
          show={this.state.show}
          currentBeast={this.state.currentBeast}
          handleClose={this.handleClose}
        />
      </>
    )
  }
}
export default Main

// { <HornedBeast }
// image_url = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
// title = "UniWhal"
// description = "A unicorn and a narwhal nuzzling their horns"/>

// <HornedBeast
// image_url = "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" 
// title = "Rhino Family"
// description = "Parent rhino with two babies"/>

// <HornedBeast
// image_url = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" 
// title = "Unicorn Head"
// description = "Someone wearing a very silly unicorn head mask"/>

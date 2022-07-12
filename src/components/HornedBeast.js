import { Component } from 'react';

class HornedBeast extends Component{
  // constructor () {
  //   super();
  // }
    render() {
      return (
        <>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt="text" title="title"></img>
        <p> {this.props.description}</p>
        </>
      )
    }
}
export default HornedBeast;




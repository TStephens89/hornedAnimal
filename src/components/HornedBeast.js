import { Component } from 'react';
import Image from 'react-bootstrap/Image';
class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }
  addClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    return (

      <div>
        <Image width="200px" src={this.props.beast.image_url} onClick={this.addClick} />
        <p>&hearts; {this.state.likes} </p>
      </div>
    )
  }
}
export default HornedBeast;





    // <>
    // <h2>{this.props.title}</h2>
    // <img src={this.props.image_url} alt="text" title="title"></img>
    // <p> {this.props.description}</p>
    // state props or function name I will need to add "this."
    // </>
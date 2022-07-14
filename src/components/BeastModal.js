import React from 'react';
import { Modal, Button, Container,Image } from 'react-bootstrap';


class BeastModal extends React.Component {
  

 
  render() {
    return (
      <>

        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          size={"l"}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Image
                style={{ width: '400px' }}
                src={this.props.currentBeast.image_url} />

            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              also Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default BeastModal
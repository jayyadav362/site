import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

export default class Display extends React.Component{
    constructor(){
        super();
        
        this.state = {
            message: "Hello, world!"
        }
    }
    
    clickKro(){
        this.setState({
            message: "Now to subscribe our website!"
        })
    }
    
    render(){
        return(
        <Jumbotron>
  <h1>{this.state.message}</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary" onClick={() => this.clickKro()}>Subscribe Now</Button>
  </p>
</Jumbotron>
        )
    }
}
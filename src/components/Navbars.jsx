import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Navbar,Image,Container,Nav,Button} from 'react-bootstrap';


export default class Navbars extends React.Component{
    render(){
        return(
            <Router>
                <Navbar bg="light" varient="light">
              <Container>
                   <Navbar.Brand>
                       <Image src="https://www.codewithsadiq.com/assets/newlogo.png"></Image>
                   </Navbar.Brand>
                   <Nav className="ml-auto">
                        <Link to="/cards">Cards</Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cards">Cards</Nav.Link>
                   </Nav>
               </Container>
            </Navbar>
          </Router>
        );
    }  
}

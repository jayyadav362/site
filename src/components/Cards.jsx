import React from 'react';
import {Card} from 'react-bootstrap';

export default class Cards extends React.Component{
    
    constructor(){
        super();
        this.state = {
            data:[
                {
                    "id":1,
                    "name":"jay"
                },
            {
                    "id":2,
                    "name":"prince"
                },
            {
                    "id":3,
                    "name":"anish"
                },
            {
                    "id":4,
                    "name":"vishal"
                }
            ]
        }
    }
    
    render(){
        
        return this.state.data.map((person,i) =>
        <div className="col-lg-3" key={i}>
            <Card>
                <Card.Body>
                    <h1>{person.name}</h1>
                    <p>#id: {person.id}</p>
                </Card.Body>
            </Card>
        </div>
        );
    }
}
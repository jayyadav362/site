import React from 'react';
import {} from 'react-bootstrap';

//const banner = (props) =>{
    //return(
    //<div className="bg-danger text-white w-100 py-3">
           // <div className="container">
                //<h6>LIMITED OFFER: ₹100/- FLAT DISCOUNT ON ANY COURSES. USE "{props.code}" COUPON ENROLL NOW</h6>
            //</div>
        //</div>
   // )
//}

//export default banner;

export default class Banner extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    
    increment(){
        this.setState( {
            count: this.state.count + 1
        })
    }
    decrement(){
        this.setState( {
            count: this.state.count - 1
        })
    }
    
    render(){
        return(
        <div className="bg-info text-white w-100 py-3">
            <div className="container">
                <h6>LIMITED OFFER: ₹100/- FLAT DISCOUNT ON ANY COURSES. USE "{this.props.code}" COUPON ENROLL NOW</h6>
                <div class="form-inline">
                <button className="btn btn-danger"  onClick={() => this.decrement()}>-</button>
                <h5 className="m-2" >{this.state.count}</h5> 
                <button className="btn btn-primary"   onClick={() => this.increment()}>+</button>
                </div>
            </div>
        </div>
        );
        }
}
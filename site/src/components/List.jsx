import React,{Component} from 'react';

export default class List extends Component{
    
    state = {
        count:0,
        tags: ["cow","bull","ox","dog"]
    }

    clickHandle(){
        this.setState({
            count: this.state.count + 1
        }
        )
    }

    renderElement(){
        
        if(this.state.tags.length===0) return <p>Animals not available</p>;
        return(
            <ul className="list-group">
               {this.state.tags.map((tag,i) => (
                    <li className="list-group-item" key={tag}>{tag} <span className="badge bg-danger text-white">{this.state.count}</span>
                
                    <button className="btn btn-success float-right"  onClick={() => this.clickHandle(i)}>Increment</button>
                    </li>
                ))}
            </ul>
        );
    }    

    render(){
        return(
        <div>
            {this.state.tags.length===0 && "Please Create an animal name list"}
            {this.renderElement()}
        </div>
        );
    }
}

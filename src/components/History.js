import React from "react";
import './style.css'

class History extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div
                    key={this.props.index}
                    onClick={() => this.props.method(this.props.arr, this.key)}
                    type="button"
                    // value={this.props.val[1]} 
                   >
                       {this.props.val[1]} 
                    </div>
        )
    }
}

export default History;
import React from "react";
import './style.css'

class History extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <input
                    key={this.props.index}
                    onClick={() => this.props.method(this.props.arr, this.key)}
                    type="button"
                    value={this.props.val[1]} 
                   />
        )
    }
}

export default History;
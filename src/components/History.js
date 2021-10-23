import React from "react";
import './style.css'

class History extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input
                    onClick={() => this.props.method(this.props.val[1])}
                    type="button"
                    value={this.props.val[0]} />
            </div>
        )
    }
}

export default History;
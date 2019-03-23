import React, { Component } from "react";

class Btn extends Component {

    handlerClick() {

    }

    render() {
        return (
            <button
                className="btn btn--basic"
                onClick={this.handlerClick()}
            >
                {this.props.title}
            </button>
        )
    }
}

export default Btn;
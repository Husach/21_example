import React, { Component } from "react";

class Btn extends Component {

    render() {
        return (
            <button
                className="btn btn--basic"
                onClick={this.props.handlerBtnClick}
            >
                {this.props.title}
            </button>
        )
    }
}

export default Btn;
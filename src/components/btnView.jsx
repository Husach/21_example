import React, { Component } from "react";

class BtnView extends Component {

    handlerClick() {

    }

    render() {
        return (
            <button
                className="btn btn--view"
                onClick={this.handlerClick()}
            >
                View
            </button>
        )
    }
}

export default BtnView;
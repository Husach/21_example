import React, { Component } from "react";

class BtnView extends Component {

    render() {
        return (
            <button
                className="btn btn--view"
                onClick={this.props.handlerBtnViewClick}
            >
                View
            </button>
        )
    }
}

export default BtnView;
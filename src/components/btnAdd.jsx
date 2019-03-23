import React, { Component } from "react";

class BtnAdd extends Component {

    handlerClick() {

    }

    render() {
        return (
            <button
                className="btn btn--add"
                onClick={this.handlerClick()}
            >
                Add to cart
            </button>
        )
    }
}

export default BtnAdd;
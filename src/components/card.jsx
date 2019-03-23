import React, { Component } from "react";
import BtnAdd from "./btnAdd";
import BtnView from "./btnView";

class Card extends Component {

    renderImg() {
        return (
            <div className="card__img">
                <img
                    alt="card-img"
                    className="card__img-inner"
                    src="https://dummyimage.com/250x250/fff/aaa" />
            </div>
        )
    }

    renderPrice() {
        if (this.props.discountCost !== "null") {
            return (
                <div className="card__price">
                    <div className="card__costDis">${this.props.discountCost}</div>
                    <div className="card__cost">${this.props.cost}</div>
                </div>
            )
        }
        return (
            <div className="card__price">
                <div className="card__costDis">${this.props.cost}</div>
            </div>
        )
    }

    renderControl() {
        return (
            <div className="card__control">
                <BtnAdd />
                <BtnView />
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                {this.renderImg()}
                <div className="card__title">Lorem ipsum dolor sit amet  cons ectetuer adipiscing elit. Prae</div>
                <div className="card__description">Adipiscing elit. Praesent vestibulum molestie lacus. Aenean non</div>
                {this.renderPrice()}
                {this.renderControl()}
            </div>
        )
    }
}

export default Card;
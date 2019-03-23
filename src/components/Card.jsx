import React, { Component } from "react";
import Btn from "./Btn";
import BtnView from "./BtnView";

class Card extends Component {

    renderSale() {
        return this.props.item.discountCost !== null ? <div className="card__type card__sale">Sale</div> : null;
    }

    renderNew() {
        return this.props.item.new ? <div className="card__type card__new">New</div> : null;
    }

    renderImg() {
        return (
            <div className="card__img">
                <img
                    alt="card-img"
                    className="card__img-inner"
                    src={this.props.item.img}
                />
                {this.renderSale()}
                {this.renderNew()}
            </div>
        )
    }

    renderPrice() {
        if (this.props.item.discountCost !== null) {
            return (
                <div className="card__price">
                    <div className="card__costDis">${this.props.item.discountCost}.00</div>
                    <div className="card__cost">${this.props.item.cost}.00</div>
                </div>
            )
        }
        return (
            <div className="card__price">
                <div className="card__costDis">${this.props.item.cost}.00</div>
            </div>
        )
    }

    renderControl() {
        return (
            <div className="card__control">
                <Btn title="Add to cart"/>
                <BtnView />
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                {this.renderImg()}
                <div className="card__title">{this.props.item.title}</div>
                <div className="card__description">{this.props.item.description}</div>
                {this.renderPrice()}
                {this.renderControl()}
            </div>
        )
    }
}

export default Card;
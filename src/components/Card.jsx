import React, { Component } from "react";
import Btn from "./Btn";
import BtnView from "./BtnView";
import Modal from 'simple-react-modal';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    handlerBtnViewClick() {
        this.setState({isModalOpen : !this.state.isModalOpen})
    }

    modalClose() {
        this.setState({isModalOpen : !this.state.isModalOpen})
    }

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
        if (this.props.item.cost) {
            return (
                <div className="card__price">
                    <div className="card__costDis">${this.props.item.cost}.00</div>
                </div>
            )
        }
        return (
            <div className="card__price">
                <div className="card__costDis">{this.props.item.cost}</div>
            </div>
        )
    }

    renderControl() {
        return (
            <div className="card__control">
                <Btn handlerBtnClick={() => {this.setState({isModalOpen : true})}} title="Add to cart"/>
                <BtnView handlerBtnViewClick={() => {this.setState({isModalOpen : true})}} />
            </div>
        )
    }

    renderModal() {
        return (
            <Modal
                class="modal"
                show={this.state.isModalOpen}
                onClose={() => {this.setState({isModalOpen : false})}}
                transitionSpeed={500}>
                <div className="modal__text">Данный функционал находится в разработке и появится в ближайшее время</div>
            </Modal>
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
                {this.renderModal()}
            </div>
        )
    }
}

export default Card;
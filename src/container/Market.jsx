import React, { Component, Fragment } from "react";
import Card from '../components/Card';
import Btn from "../components/Btn";

const goodsData = [
    {
        title: 'test title 1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: 199,
        new: true,
        img: '../img/goods/Layer311.png'
    },
    {
        title: 'test title 2',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: '../img/goods/Layer312.png'
    },
    {
        title: 'test title 3',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 125,
        new: true,
        discountCost: null,
        img: '../img/goods/Layer313.png'
    },
    {
        title: 'test title 4',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 111,
        discountCost: 90,
        new: false,
        img: '../img/goods/Layer314.png'
    },
    {
        title: 'test title 5',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: true,
        img: '../img/goods/Layer315.png'
    },
    {
        title: 'test title 6',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: true,
        img: '../img/goods/Layer316.png'
    },
    {
        title: 'test title 7',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: '../img/goods/Layer317.png'
    },
    {
        title: 'test title 8',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: '../img/goods/Layer318.png'
    },
    {
        title: 'test title 9',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: '../img/goods/Layer311.png'
    }
]

class Market extends Component {
    render() {
        return (
            <Fragment>
                <div className="market">
                    {goodsData.map((item, index) =>
                        <Card item={item} key={index} />
                    )}
                </div>
                <div className="load-more">
                    <Btn title="Load more"/>
                </div>
            </Fragment>
        )
    }
}

export default Market;
import React, { Component, Fragment } from "react";
import Card from '../components/Card';
import Btn from "../components/Btn";
// import axios from "axios";

const goodsData = [
    {
        title: 'test title 1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: 199,
        new: true,
        img: './img/goods/Layer311.png'
    },
    {
        title: 'test title 2',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: './img/goods/Layer312.png'
    },
    {
        title: 'test title 3',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 125,
        new: true,
        discountCost: null,
        img: './img/goods/Layer313.png'
    },
    {
        title: 'test title 4',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 111,
        discountCost: 90,
        new: false,
        img: './img/goods/Layer314.png'
    },
    {
        title: 'test title 5',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: true,
        img: './img/goods/Layer315.png'
    },
    {
        title: 'test title 6',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: true,
        img: './img/goods/Layer316.png'
    },
    {
        title: 'test title 7',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: './img/goods/Layer317.png'
    },
    {
        title: 'test title 8',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: './img/goods/Layer318.png'
    },
    {
        title: 'test title 9',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        cost: 249,
        discountCost: null,
        new: false,
        img: './img/goods/Layer311.png'
    }
]

class Market extends Component {

    // axiosRequest() {
    //     axios.get("/php/list.php")
    //         .then(({data}) => {
    //             debugger;
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             debugger;
    //             console.log(error);
    //         })
    // }

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            showedGoods: [],
            allShowed: false
        };
        this.showedGoods = [];
        this.nextGoods = [];
        this.goods = [];
    }


    componentWillMount() {
        goodsData.map((item, index) => this.goods[index] = item);

        for(let i = 0; i < this.state.page * 4; i++ ) {
            if (this.goods[i]) this.showedGoods[i] = this.goods[i];
        }

        this.setState({showedGoods: this.showedGoods}, () => {this.setNextGoods()})
    }

    setNextGoods() {
        console.log(this.state.lastItem);
        this.setState({page: this.state.page + 1}, () => {
            for(let i = 0; i < 4; i++ ) {
                if (this.goods[((this.state.page - 1) * 4) + i]) {
                    this.nextGoods[i] = this.goods[((this.state.page - 1) * 4) + i];
                }
            }
        });

        if (goodsData.length === this.state.showedGoods.length) this.setState({allShowed: true})
    }

    loadMoreHandler() {
        this.showedGoods = this.showedGoods.concat(this.nextGoods);
        this.nextGoods = [];
        this.setState({showedGoods: this.showedGoods}, () => {this.setNextGoods()});
    }

    renderLoadMore() {
        if (!this.state.allShowed) {
            return (
                <div className="load-more">
                    <Btn handlerBtnClick={this.loadMoreHandler.bind(this)}
                         title="Load more"/>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
            <Fragment>
                <div className="market">
                    {this.showedGoods.map((item, index) =>
                        <Card item={item} key={index} />
                    )}
                </div>
                {this.renderLoadMore()}
            </Fragment>
        )
    }
}

export default Market;
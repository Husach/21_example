import React, { Component } from "react";
import Card from './card';

class Market extends Component {
    render() {
        return (
            <div className="market">
                <Card cost="100" discountCost="50" />
                <Card cost="200" discountCost="null" />
                <Card cost="150" discountCost="75" />
                <Card cost="300" discountCost="100" />
                <Card cost="100" discountCost="50" />
                <Card cost="200" discountCost="100" />
                <Card cost="120" discountCost="null" />
                <Card cost="170" discountCost="null" />
            </div>
        )
    }
}

export default Market;
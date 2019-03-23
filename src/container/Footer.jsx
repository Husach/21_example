import React, { Component } from 'react';
import HotOffers from "../components/HotOffers";
import StoreInfo from "../components/StoreInfo";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <HotOffers />
                <HotOffers />
                <StoreInfo />
            </div>
        )
    }
}

export default Footer;
import React, { Component } from 'react';

class StoreInfo extends Component {
    render() {
        return (
            <div className="footer-block">
                <div className="footer-block__title">Store information</div>
                <ul className="footer-block__list">
                    <li className="footer-block__item footer-block__item--location">
                        <a href="https://www.google.com/maps/search/8901+Marmora+Road,+Glasgow,+D04+89GR/@55.8647942,-4.2546783,17z/data=!3m1!4b1"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="footer-block__email">
                            Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</a>
                    </li>
                    <li className="footer-block__item footer-block__item--phone">
                        <a href="tel:(800) 2345-6789"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="footer-block__email">
                            Call us now toll free: (800) 2345-6789</a>

                    </li>
                    <li className="footer-block__item footer-block__item--email">
                        <div>Customer support:
                            <a href="mailto:support@example.com"
                               className="footer-block__email">
                                support@example.com
                            </a>
                        </div>
                        <div>Press:
                            <a href="maito:pressroom@example.com"
                               className="footer-block__email">
                                pressroom@example.com</a>
                        </div>
                    </li>
                    <li className="footer-block__item footer-block__item--skype">
                        <a href="skype:sample-username"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="footer-block__email">
                            Skype: sample-username</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default StoreInfo;
import React, { Component } from 'react';
import './App.css';
import Market from './container/Market'
import Footer from "./container/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Market />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

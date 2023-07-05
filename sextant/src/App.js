import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant - IP Display" />
                <div className='rectangle'>
                    <Exhibit>
                    <IPDisplay/>
                    </Exhibit>
                    
                </div>
            </div>
        );
    }
}

export default App;

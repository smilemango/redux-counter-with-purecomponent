import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterList from './CounterList';




class App extends Component {
    render() {
        
        return (
            <div className="App">
                <Buttons/>
                <CounterList/>
            </div>
        );
    }
}

export default App;
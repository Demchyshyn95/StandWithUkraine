import React from 'react';

import Search from './components/Search/Search';
import {Container} from "reactstrap";
import './App.css';
import ShowTheWeather from './components/ShowTheWeather';
import Errora from './components/Errora';
import getServerData from "./components/restApi";

class App extends React.Component {
    state = {
        city: '',
        isActive: false,
        error: false,
    }
    getWeather = async (e) => {
        e.preventDefault();
        const newCity = e.target.elements.city.value;
        const rezult = await getServerData(newCity);
        rezult ?
            this.setState({
                city: rezult,
                isActive: !this.state.isActive
            })
            :
            this.setState({
                error: true
            })
    }
    deactive = () => {
        this.setState({isActive: false})
    }

    render() {
        const {city, error, isActive} = this.state;
        return (
            <div className='main'>
                <Container>
                    <div>
                        <Search getWeather={this.getWeather}/>
                    </div>
                    {city &&
                    <ShowTheWeather city={city} deactive={this.deactive} isActive={isActive}/>
                    }
                    {
                        error && <Errora/>
                    }
                </Container>
            </div>
        )
    }
}

export default App;

import React, {useState} from 'react';

import Search from './components/Search/Search';
import {Container} from "reactstrap";
import './App.css';
import ShowTheWeather from './components/ShowTheWeather';
import Error from './components/Errora';
import getServerData from "./Service";

const App = () => {
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(false);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);


    const getWeather = async (city) => {
        setError(false);
        setLoading(!loading);
        setDisabled(!disabled);

        const response = await getServerData(city);
        if (!response.main) {
            setError(!error)
            setLoading(prevState => !prevState);
            setDisabled(prevState => !prevState);
        } else {
            const {main, sys, weather, name, wind} = response;
            setWeather({main, sys, name, weather, wind})
            setIsActive(prevState => !prevState);
        }
    }
    const deactive = () => {
        setLoading(prevState => !prevState);
        setDisabled(prevState => !prevState);
        setIsActive(prevState => !prevState);
    }

    return (
        <div className='main'>
            <Container>
                <h2>Weather App</h2>
                <div>
                    <Search getWeather={ getWeather } disabled={ disabled } loading={ loading }/>
                </div>
                <div>
                    { weather &&
                    <ShowTheWeather theWeather={ weather } deactive={ deactive } isActive={ isActive }/>
                    }
                    {
                        error && <Error/>
                    }
                </div>
            </Container>
        </div>
    )
}


export default App;

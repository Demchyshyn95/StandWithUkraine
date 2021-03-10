import React, {useState} from 'react';
import {Button, Input, Container} from 'reactstrap';
import './style.css'

const Search = ({ getWeather, loading, disabled }) => {

    const [city, setCity] = useState('');

    const getCity = () => {
        getWeather(city);
        setCity('');
    }


    return (
        <div className='search'>
            <input type="text" name="city" placeholder="Enter your city..." onChange={e => setCity(e.target.value)}
                   value={city} required className="form-control" aria-label="Small"
                   aria-describedby="inputGroup-sizing-sm"/>
            <div className='load'>
                <button disabled={disabled} onClick={ getCity } className=' btn btn-success btn-lg'>Search</button>
                {
                    loading && <div className="load spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>


        </div>
    )
}
export default Search;

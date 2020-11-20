import React from 'react';
import { Button, Input, Container } from 'reactstrap';
import './style.css'

const Search = ({getWeather}) => {
    return (
        <form onSubmit={getWeather}>
            <Input type="text" name="city" placeholder="Enter your city..." className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            <button  className=' asd btn-success btn-lg'>Search</button>
        </form>
    )
}
export default Search;

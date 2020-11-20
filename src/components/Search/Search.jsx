import React from 'react';
import { Button, Input, Container } from 'reactstrap';

const Search = ({getWeather}) => {
    return (
        <form onSubmit={getWeather}>
            <Input type="text" name="city" placeholder="Enter your city..." className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
            <Button color="success">Get the weather</Button>
        </form>
    )
}
export default Search;

import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Image from './Image/Image';


const ShowTheWeather = ({deactive, city, isActive}) => {
    return (
        <Modal isOpen={isActive}>
            <ModalHeader toggle={deactive}>Погода у місті {city.name}</ModalHeader>
            <ModalBody>
                <p>Місто: {city.name} {city.sys.country}</p>
                <p>Погода : <Image main={city.weather[0].main}/>{city.weather[0].main}</p>
                <p>Температура: {city.main.temp}°C</p>
                <p>Відчуваєтся як : {city.main.feels_like} °C</p>
                <p>Вологість : {city.main.humidity} %</p>
                <p>Швидкість вітру : {city.wind.speed} m/c</p>
            </ModalBody>
            <ModalFooter>
                <Button color="success" size="sm" onClick={deactive}>OK =)</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ShowTheWeather;

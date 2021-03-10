import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Image from './Image/Image';


const ShowTheWeather = (props) => {
    const { deactive, isActive } = props;

    const { name,sys:{country},weather, main:{temp,feels_like,humidity}, wind:{speed} } = props?.theWeather;


    return (
        <Modal isOpen={isActive}>
            <ModalHeader toggle={ deactive }>Погода у місті {name}</ModalHeader>
            <ModalBody>
                <p>Місто: {name} {country}</p>
                <p>Погода : <Image main={weather[0].main}/>{weather[0].main}</p>
                <p>Температура: {temp}°C</p>
                <p>Відчуваєтся як : {feels_like} °C</p>
                <p>Вологість : {humidity} %</p>
                <p>Швидкість вітру : {speed} m/c</p>
            </ModalBody>
            <ModalFooter>
                <Button color="success" size="sm" onClick={deactive}>OK </Button>
            </ModalFooter>
        </Modal>
    )
}
export default ShowTheWeather;

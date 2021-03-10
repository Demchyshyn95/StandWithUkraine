import React from 'react';
import './image.css';

const Image = ({ main }) => {

    if (main === "Clouds") {
        return (<div>
            <img src="https://w0.pngwave.com/png/72/265/cloud-icon-sun-clouds-weather-icon-png-clip-art.png"/>
        </div>)
    } else if (main === "Clear") {
        return (<div>
            <img src="https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-14.jpg"/>
        </div>)
    } else if (main === "Rain") {
        return (<div><img
            src="https://www.netclipart.com/pp/m/12-120684_showers-weather-clipart-astonishing-showers-weather-rainy-clipart.png"/>
        </div>)
    } else if (main === "Snow") {
        return (<div><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/1024px-Weather-snow.svg.png"/>
        </div>)
    } else if (main === "Mist") {
        return (<div><img src="https://www.iconfinder.com/data/icons/weather-350/64/fog-weather-mist-512.png"/>
        </div>)
    } else if (main === "Thunderstorm") {
        return (<div><img
            src="https://www.clipartkey.com/mpngs/m/9-92258_clip-art-lightning-storm-clipart-thunderstorm-clipart.png"/>
        </div>)
    }else{
        return (<div><img
            src="https://d279m997dpfwgl.cloudfront.net/wp/2017/12/weather_album-art-1000x1000.jpg"/>
        </div>)
    }
}

export default Image;

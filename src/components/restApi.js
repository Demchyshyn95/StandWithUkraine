import axios from 'axios';

const getData = async (city) => {
    const key = 'd30221db037a220fa065462876bb7f59'
    try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        return data;
    } catch (e) {
        return;
    }
}
export default getData;

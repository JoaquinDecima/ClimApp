import axios from 'axios';

const server = 'https://climappar.herokuapp.com/api/';


export async function  current() {
    const res = await axios.get(`${server}current/`);
    return res.data;
}

export async function currentcity(city){
    const res = await axios.get(`${server}current/${city}`);
    return res.data;
}

export async function next() {
    const res = await axios.get(`${server}forecast/`);
    return res.data;
}

export async function nextcity(city) {
    const res = await axios.get(`${server}forecast/${city}`);
    return res.data;
}

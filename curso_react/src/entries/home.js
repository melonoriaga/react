import React from 'react';
import { render } from 'react-dom';
// import Playlist from './src/playlist/componentes/playlist';
import Home from '../pages/containers/home'
import data from '../api.json';

const home_container = document.getElementById('home_container');
// const holaMundo = <h1>Hola mundo mel</h1>;

// render('Que voy a renderizar', 'donde lo hare');

render(<Home data={data}  />, home_container);

// render(<Media title="Que es responsive design?" author="Melina Onoriaga" image="./images/covers/react.png" type="video.mp4"/>, app);

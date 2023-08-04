import {proxy} from 'valtio';

// Proxy is a feature of valtio that allows you to create a state object that can be mutated from anywhere and subscribed to by components or functions

const state = proxy({

    intro: true, //this object basically checks that whether we are on the home page or are we not
    color : '#EFBD48', //this is the default color we will use
    isLogoTexture : true, //currently there is any design on tshirt or not
    isFullTexture : false,
    logoDecal : './threejs.png',
    fullDecal : './threejs.png',

});
export default state;
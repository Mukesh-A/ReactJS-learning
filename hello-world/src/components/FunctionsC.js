import React from 'react'

const Greet = ()=><h1>Mukesh</h1>

// this is default export .If we want to change the name from greet to Example in the App.js  we can do it without changing the Greet word here.

// if we doesn't want to expost this way we can directly add export to the Greet variable eg:
// export const Greet = ()=><h1>Mukesh</h1> , if we do like this then same name have to be given in the app.js we cant change the word their, and also we need to add {} in the object we give i.e import {Greet} from ""  => This is called named Export;

export default Greet
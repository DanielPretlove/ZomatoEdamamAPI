const { observable } = require("mobx");


/*
*       This store object is assigned as a observable type, observables allow us to store ANY value, (usaully object) inside of the function.
*       We access this observable through observer functional components or class components to either SET,GET,Update the value stored.
*       
*       
*/

export let store = observable({
    restaurants: []
});
  
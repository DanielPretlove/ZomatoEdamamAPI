const { observable, extendObservable, action } = require("mobx");


/*
*       This store object is assigned as a observable type, observables allow us to store ANY value, (usaully object) inside of the function.
*       We access this observable through observer functional components or class components to either SET,GET,Update the value stored.
*       
*       IN PLAIN TERMS, CONSIDER THIS A GLOBAL STATE
*/

export var store = observable({
    restraunts: []
});
  
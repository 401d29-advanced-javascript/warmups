'use strict';

const superagent = require('superagent');

const swapi = 'http://swapi.co/api/people/';


//.then() always expects a PROMISE of data
//instead of actual data
const fetchPeopleWithPromises = () => {
  return superagent.get(swapi)
    .then( data => {//using multiple .then() is almost like an array of requests
                    //the first .then() goes to the next .then()
      let promises = data.body.results.map( person => {
        return superagent.get(person.url);
      });      
    })
    .then( peopleRequests => {
      return Promise.all(peopleRequests)//Promises.all() always returns an array of stuff
        .then( people => {
          console.log('People: ', people);
          let names = [];
          for (let person of people) {
            names.push(person.body.name);//names will be populated
          }
          console.log('names: ', names);
          return names;//the last .then() will return it's value all the way to EITHER the next .then() OR where the function itself is called (at the very bottom)
        });
    });
  //For each element (person), get their URL
  //Fetch all of thoe URLs
};

fetchPeopleWithPromises()
  .then(people => {
    console.log(people);
  });


fetchPeopleWithAsync = async () => {//is an async function
  let peopleSet = await superagent.get(swapi);
  const people = peopleSet.body.results || [];
  // console.log(people);
  const peopleRequests = people.map(person => {
    return superagent.get(person.url);
    //Will return an array of promises
  });
};

const names = await Promise.all(peoplRequests)
  .then(people => {
    let names = [];
    for(let person of people) {
      names.push(person.body.name);
    };
    return names;
  });

fetchPeopleWithAsync()
  .then(people => {
    console.log(people);
  });
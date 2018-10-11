import {db} from './firestore';

/*
var docRef = db.collection('users').doc('alovelace');

console.log('docRef', docRef)

var setAda = docRef.set({
  name: 'Ada',
});*/


export const users = db.collection("users").get();

export const persons = [
  {
    id: "1",
    sex: 'male',
    name: 'miro'
  },
  {
    id: "2",
    sex: 'female',
    name: 'lala'
  },
  {
    id: "3",
    sex: 'male',
    name: 'joe'
  }
];

export const findPerson = (persons: Array<any>, id: string) => {
  return persons.find(person => person.id === id);
};

export const addPerson = (persons: Array<any>, person: any) => {
  persons.push(person);
  return person;
};
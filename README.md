# Toggles Component

## Task

Create a reusable toggles component in React. 

## Assumptions

- Data structured as an object containing the question text and an array of toggle pairs. 
```javascript
const exampleQuestion = {
  question: 'An animal cell contains:',
  toggles: [
    [
      { text: 'Cell wall', isCorrect: false },
      { text: 'Ribosomes', isCorrect: true },
    ], 
    // etc...
}
```
- There is only one correct answer per toggle pair. 

## Instructions

To run locally:
- Clone this repo to your local machine: `git clone git@github.com:eliselarooy/toggles-component.git`
- Run `npm install` to install all dependencies 
- Run `npm start` and open [http://localhost:3000](http://localhost:3000) to view the app in your browser


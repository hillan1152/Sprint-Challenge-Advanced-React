import React from 'react';
import ReactDOM from 'react-dom';
import App, {darkMode} from './App';
import Players from './components/Players';
import {render, fireEvent, getByLabelText} from '@testing-library/react'




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('This is darkmode',() => {
  expect(darkMode).toBe(darkMode);
})

// test('Players Works', () => {
//   ReactDOM.render(<Players />);

// })
// test('Shows words', () => {
//   const words = 'Womens World Cup Popular Players!'
//   ReactDOM.render(<App />);
//   expect(getByText('h1')).toBe(words);
// })
// test('This has words', () => {
//   fireEvent.click(getByLabelText(/click/i))
// })
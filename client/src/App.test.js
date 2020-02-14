import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('players! text renders properly on screen', () => {
  const { getByText } = render(<App/>)
  const h1 = getByText(/Players!/i)
  expect(h1).toBeInTheDocument()
})

test(`does btn have class name`, ()=> {
  const { getByTestId } = render(<App/>)
  const checkButtonClass = getByTestId('button-change')
  expect(checkButtonClass).toHaveClass('btn')
})

test('the flavor list players', () => {
  const { getByText } = render(<App/>)
  const buttonText = getByText(/push me/i)
  expect(buttonText).toBeInTheDocument()
});
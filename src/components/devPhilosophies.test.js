import React from 'react';
import ReactDOM from 'react-dom';
import DevPhilosophies from './devPhilosophies';

let div;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    ReactDOM.render(<DevPhilosophies />, div);
});

it('renders all 6 philosophy entries', () => {
    ReactDOM.render(<DevPhilosophies />, div);
    const entries = div.querySelectorAll('.philosophy-entry');
    expect(entries.length).toBe(6);
});

it('renders numbered entries 01 through 06', () => {
    ReactDOM.render(<DevPhilosophies />, div);
    const numbers = Array.from(div.querySelectorAll('.philosophy-number')).map(el => el.textContent);
    expect(numbers).toEqual(['01', '02', '03', '04', '05', '06']);
});

it('first entry is pair programming philosophy', () => {
    ReactDOM.render(<DevPhilosophies />, div);
    const firstTitle = div.querySelector('.philosophy-title').textContent;
    expect(firstTitle).toMatch(/Pair Programming/i);
});

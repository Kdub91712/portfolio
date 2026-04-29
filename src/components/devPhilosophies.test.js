import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import DevPhilosophies from './devPhilosophies';

let div;
let root;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    act(() => { root = createRoot(div); });
});

afterEach(() => {
    act(() => { root.unmount(); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { root.render(<DevPhilosophies />); });
});

it('renders all 6 philosophy entries', () => {
    act(() => { root.render(<DevPhilosophies />); });
    const entries = div.querySelectorAll('.philosophy-entry');
    expect(entries.length).toBe(6);
});

it('renders numbered entries 01 through 06', () => {
    act(() => { root.render(<DevPhilosophies />); });
    const numbers = Array.from(div.querySelectorAll('.philosophy-number')).map(el => el.textContent);
    expect(numbers).toEqual(['01', '02', '03', '04', '05', '06']);
});

it('first entry is pair programming philosophy', () => {
    act(() => { root.render(<DevPhilosophies />); });
    const firstTitle = div.querySelector('.philosophy-title').textContent;
    expect(firstTitle).toMatch(/Pair Programming/i);
});

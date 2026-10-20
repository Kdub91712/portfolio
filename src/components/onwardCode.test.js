import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import OnwardCode from './onwardCode';

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

it('renders a card linking to each site', () => {
    act(() => { root.render(<OnwardCode />); });
    const links = [...div.querySelectorAll('.onward-code-card')].map(a => a.getAttribute('href'));
    expect(links).toEqual(['https://mtbdash.com', 'https://carcritical.com']);
});

it('renders a screenshot in each card', () => {
    act(() => { root.render(<OnwardCode />); });
    expect(div.querySelectorAll('.onward-code-card img').length).toBe(2);
});

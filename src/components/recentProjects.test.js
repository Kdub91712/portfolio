import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import RecentProjects from './recentProjects';

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
    act(() => { root.render(<RecentProjects />); });
});

it('renders the In Progress section', () => {
    act(() => { root.render(<RecentProjects />); });
    const heading = div.querySelector('.in-progress-heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toMatch(/In Progress/i);
});

it('renders MTBDASH as the in-progress project', () => {
    act(() => { root.render(<RecentProjects />); });
    const title = div.querySelector('.in-progress-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('MTBDASH.com');
});

it('renders 5 completed project cards', () => {
    act(() => { root.render(<RecentProjects />); });
    const cards = div.querySelectorAll('.recent-project-card');
    expect(cards.length).toBe(5);
});

it('MTBDASH links to mtbdash.com', () => {
    act(() => { root.render(<RecentProjects />); });
    const link = div.querySelector('.in-progress-title');
    expect(link.getAttribute('href')).toBe('https://mtbdash.com');
});

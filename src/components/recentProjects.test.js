import React from 'react';
import ReactDOM from 'react-dom';
import RecentProjects from './recentProjects';

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
    ReactDOM.render(<RecentProjects />, div);
});

it('renders the In Progress section', () => {
    ReactDOM.render(<RecentProjects />, div);
    const heading = div.querySelector('.in-progress-heading');
    expect(heading).not.toBeNull();
    expect(heading.textContent).toMatch(/In Progress/i);
});

it('renders MTBDASH as the in-progress project', () => {
    ReactDOM.render(<RecentProjects />, div);
    const title = div.querySelector('.in-progress-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('MTBDASH.com');
});

it('renders 4 completed project cards', () => {
    ReactDOM.render(<RecentProjects />, div);
    const cards = div.querySelectorAll('.recent-project-card');
    expect(cards.length).toBe(4);
});

it('MTBDASH links to mtbdash.com', () => {
    ReactDOM.render(<RecentProjects />, div);
    const link = div.querySelector('.in-progress-title');
    expect(link.getAttribute('href')).toBe('https://mtbdash.com');
});

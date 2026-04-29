import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Navigation from './navigation';

const mockNavLinkHandler = jest.fn();

let div;
let root;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    act(() => { root = createRoot(div); });
    mockNavLinkHandler.mockClear();
});

afterEach(() => {
    act(() => { root.unmount(); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
});

it('menu is closed by default', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    const menu = div.querySelector('.nav-menu');
    expect(menu.classList.contains('nav-menu--open')).toBe(false);
});

it('clicking hamburger opens the menu', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    act(() => { div.querySelector('.hamburger').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(true);
});

it('clicking hamburger again closes the menu', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    act(() => { div.querySelector('.hamburger').click(); });
    act(() => { div.querySelector('.hamburger').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(false);
});

it('clicking a nav link closes the menu', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    act(() => { div.querySelector('.hamburger').click(); });
    act(() => { div.querySelector('.nav-links').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(false);
});

it('clicking a nav link calls navLinkHandler', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    act(() => { div.querySelector('.nav-links').click(); });
    expect(mockNavLinkHandler).toHaveBeenCalledTimes(1);
});

it('renders all nav links', () => {
    act(() => { root.render(<Navigation navLinkHandler={mockNavLinkHandler} />); });
    const links = div.querySelectorAll('.nav-links');
    expect(links.length).toBe(8);
});

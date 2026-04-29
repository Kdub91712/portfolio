import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Navigation from './navigation';

const mockNavLinkHandler = jest.fn();

let div;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    mockNavLinkHandler.mockClear();
});

afterEach(() => {
    act(() => { ReactDOM.unmountComponentAtNode(div); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
});

it('menu is closed by default', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    const menu = div.querySelector('.nav-menu');
    expect(menu.classList.contains('nav-menu--open')).toBe(false);
});

it('clicking hamburger opens the menu', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    act(() => { div.querySelector('.hamburger').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(true);
});

it('clicking hamburger again closes the menu', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    act(() => { div.querySelector('.hamburger').click(); });
    act(() => { div.querySelector('.hamburger').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(false);
});

it('clicking a nav link closes the menu', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    act(() => { div.querySelector('.hamburger').click(); });
    act(() => { div.querySelector('.nav-links').click(); });
    expect(div.querySelector('.nav-menu').classList.contains('nav-menu--open')).toBe(false);
});

it('clicking a nav link calls navLinkHandler', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    act(() => { div.querySelector('.nav-links').click(); });
    expect(mockNavLinkHandler).toHaveBeenCalledTimes(1);
});

it('renders all nav links', () => {
    act(() => { ReactDOM.render(<Navigation navLinkHandler={mockNavLinkHandler} />, div); });
    const links = div.querySelectorAll('.nav-links');
    expect(links.length).toBe(8);
});

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Login from './login';

let div;
let root;
let mockLoggedIn;

const setInputValue = (input, value) => {
    const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    nativeSetter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
};

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    act(() => { root = createRoot(div); });
    mockLoggedIn = jest.fn();
    process.env.REACT_APP_ADMIN_PASSWORD = 'secret';
});

afterEach(() => {
    act(() => { root.unmount(); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
});

it('renders a password input', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
    expect(div.querySelector('input[type="password"]')).not.toBeNull();
});

it('renders a login submit button', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
    const submit = div.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
    expect(submit.value).toBe('Login');
});

it('does not show error message initially', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
    expect(div.querySelector('p')).toBeNull();
});

it('calls loggedIn when correct password is submitted', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
    const input = div.querySelector('input[type="password"]');
    act(() => { setInputValue(input, 'secret'); });
    act(() => { div.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true })); });
    expect(mockLoggedIn).toHaveBeenCalledTimes(1);
});

it('shows error message and does not call loggedIn on wrong password', () => {
    act(() => { root.render(<Login loggedIn={mockLoggedIn} />); });
    const input = div.querySelector('input[type="password"]');
    act(() => { setInputValue(input, 'wrong'); });
    act(() => { div.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true })); });
    expect(mockLoggedIn).not.toHaveBeenCalled();
    expect(div.querySelector('p').textContent).toBe('Incorrect password');
});

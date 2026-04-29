import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import SkillRotator from './skillRotator';

const SKILLS = ['React', 'PHP & Laravel', 'Python', 'Django', 'AWS', 'Docker', 'Playwright Testing', 'Claude'];

let div;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
});

afterEach(() => {
    act(() => { ReactDOM.unmountComponentAtNode(div); });
    document.body.removeChild(div);
    jest.useRealTimers();
});

it('renders without crashing', () => {
    act(() => { ReactDOM.render(<SkillRotator />, div); });
});

it('displays one of the defined skills on mount', () => {
    act(() => { ReactDOM.render(<SkillRotator />, div); });
    const text = div.querySelector('.header-skill-rotator').textContent;
    expect(SKILLS).toContain(text);
});

it('starts visible', () => {
    act(() => { ReactDOM.render(<SkillRotator />, div); });
    const el = div.querySelector('.header-skill-rotator');
    expect(el.classList.contains('header-skill-rotator--visible')).toBe(true);
});

it('cycles to the next skill after interval', () => {
    jest.useFakeTimers();
    act(() => { ReactDOM.render(<SkillRotator />, div); });
    const first = div.querySelector('.header-skill-rotator').textContent;

    act(() => { jest.advanceTimersByTime(3200); });

    const next = div.querySelector('.header-skill-rotator').textContent;
    expect(SKILLS).toContain(next);
    expect(next).not.toBe(first);
});

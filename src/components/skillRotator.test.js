import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import SkillRotator from './skillRotator';

const SKILLS = ['React', 'PHP & Laravel', 'Python', 'Django', 'AWS', 'Docker', 'Playwright Testing', 'Claude'];

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
    jest.useRealTimers();
});

it('renders without crashing', () => {
    act(() => { root.render(<SkillRotator />); });
});

it('displays one of the defined skills on mount', () => {
    act(() => { root.render(<SkillRotator />); });
    const text = div.querySelector('.header-skill-rotator').textContent;
    expect(SKILLS).toContain(text);
});

it('starts visible', () => {
    act(() => { root.render(<SkillRotator />); });
    const el = div.querySelector('.header-skill-rotator');
    expect(el.classList.contains('header-skill-rotator--visible')).toBe(true);
});

it('cycles to the next skill after interval', () => {
    jest.useFakeTimers();
    act(() => { root.render(<SkillRotator />); });
    const first = div.querySelector('.header-skill-rotator').textContent;

    act(() => { jest.advanceTimersByTime(3200); });

    const next = div.querySelector('.header-skill-rotator').textContent;
    expect(SKILLS).toContain(next);
    expect(next).not.toBe(first);
});

import React, { useState, useEffect } from 'react';

const SKILLS = ['React', 'PHP & Laravel', 'Python', 'Django', 'AWS', 'Docker', 'Playwright Testing', 'Claude'];

const SkillRotator = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(i => (i + 1) % SKILLS.length);
                setVisible(true);
            }, 400);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`header-skill-rotator${visible ? ' header-skill-rotator--visible' : ''}`}>
            {SKILLS[index]}
        </span>
    );
};

export default SkillRotator;

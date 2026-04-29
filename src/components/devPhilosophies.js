import React from 'react';

const PHILOSOPHIES = [
    { number: '01', title: 'Lots of Pair Programming During Onboarding and Always' },
    { number: '02', title: 'Code for the Next Developer' },
    { number: '03', title: 'Ship Early, Iterate Often' },
    { number: '04', title: 'Own Problems as a Team' },
    { number: '05', title: 'Unit, Integration and E2E Tests Whenever Possible' },
    { number: '06', title: 'Security Is Not an Afterthought' },
]

const DevPhilosophies = () => (
    <div className="main-section">
        <div className="sub-section">
            <div className="philosophies-list">
                {PHILOSOPHIES.map((p) => (
                    <div key={p.number} className="philosophy-entry">
                        <span className="philosophy-number">{p.number}</span>
                        <div className="philosophy-divider" />
                        <h2 className="philosophy-title">{p.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default DevPhilosophies;

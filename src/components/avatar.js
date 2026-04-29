import React from 'react';

const Avatar = () => (
    <svg className="avatar-icon" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">

        {/* Shirt body */}
        <path d="M12 120 L12 86 Q12 72 50 72 Q88 72 88 86 L88 120Z" fill="#1e2f80"/>
        {/* Shirt left shadow */}
        <path d="M12 120 L12 86 Q12 72 50 72 L50 120Z" fill="#111e5e" opacity="0.55"/>
        {/* Shirt right highlight */}
        <path d="M50 72 Q88 72 88 86 L88 120 L70 120 L70 86 Q70 76 50 74Z" fill="#2a3d9e" opacity="0.3"/>

        {/* Collar — white V */}
        <polygon points="41,72 50,87 59,72" fill="white" opacity="0.92"/>
        <polygon points="41,72 50,87 50,72Z" fill="white" opacity="0.18"/>
        {/* Collar edge shading */}
        <path d="M41,72 L50,87 L50,72Z" fill="#ccd0e0" opacity="0.25"/>

        {/* Neck */}
        <rect x="43" y="60" width="14" height="15" rx="3" fill="#EDB48E"/>
        {/* Neck left shadow */}
        <rect x="43" y="60" width="5" height="15" rx="2" fill="#C8855A" opacity="0.35"/>
        {/* Neck right highlight */}
        <rect x="52" y="60" width="5" height="15" rx="2" fill="#F5C9A0" opacity="0.25"/>

        {/* Ears */}
        <ellipse cx="21" cy="46" rx="5.5" ry="7" fill="#EDB48E"/>
        <ellipse cx="79" cy="46" rx="5.5" ry="7" fill="#EDB48E"/>
        {/* Ear inner detail */}
        <ellipse cx="21" cy="46" rx="3" ry="4.5" fill="#D4845A" opacity="0.35"/>
        <ellipse cx="79" cy="46" rx="3" ry="4.5" fill="#D4845A" opacity="0.35"/>
        {/* Ear canal hint */}
        <ellipse cx="21.5" cy="46" rx="1.2" ry="2" fill="#C8855A" opacity="0.5"/>
        <ellipse cx="78.5" cy="46" rx="1.2" ry="2" fill="#C8855A" opacity="0.5"/>

        {/* Beard — full shape covering lower face */}
        <path d="M21 52 Q17 68 50 79 Q83 68 79 52 Q72 42 50 41 Q28 42 21 52Z" fill="#7A5015"/>
        {/* Beard mid-tone layer */}
        <path d="M25 55 Q22 68 50 77 Q78 68 75 55 Q68 46 50 44 Q32 46 25 55Z" fill="#8B6520" opacity="0.7"/>
        {/* Beard highlight center stripe */}
        <path d="M36 58 Q50 72 64 58 Q60 50 50 48 Q40 50 36 58Z" fill="#A07830" opacity="0.45"/>
        {/* Beard subtle streaks for texture */}
        <path d="M33 60 Q36 70 40 73" stroke="#6A4510" strokeWidth="0.6" fill="none" opacity="0.3"/>
        <path d="M50 64 Q50 73 50 77" stroke="#6A4510" strokeWidth="0.6" fill="none" opacity="0.25"/>
        <path d="M67 60 Q64 70 60 73" stroke="#6A4510" strokeWidth="0.6" fill="none" opacity="0.3"/>

        {/* Head */}
        <ellipse cx="50" cy="41" rx="29" ry="31" fill="#EDB48E"/>

        {/* Face shading — left side shadow */}
        <ellipse cx="35" cy="41" rx="13" ry="23" fill="#C8855A" opacity="0.16"/>
        {/* Cheekbone highlight right */}
        <ellipse cx="63" cy="36" rx="8" ry="10" fill="white" opacity="0.09"/>
        {/* Cheekbone blush left */}
        <ellipse cx="34" cy="48" rx="7" ry="5" fill="#E8836A" opacity="0.13"/>
        {/* Cheekbone blush right */}
        <ellipse cx="66" cy="48" rx="7" ry="5" fill="#E8836A" opacity="0.13"/>
        {/* Forehead highlight */}
        <ellipse cx="50" cy="24" rx="12" ry="7" fill="white" opacity="0.08"/>
        {/* Jaw shadow under beard */}
        <ellipse cx="50" cy="60" rx="16" ry="5" fill="#C8855A" opacity="0.18"/>

        {/* Hair — dark golden brown cap */}
        <path d="M21 33 Q21 5 50 5 Q79 5 79 33 Q73 16 50 14 Q27 16 21 33Z" fill="#8B6018"/>
        {/* Hair top volume — lighter streak */}
        <path d="M30 18 Q50 11 70 18 Q63 9 50 7 Q37 9 30 18Z" fill="#B8892A" opacity="0.55"/>
        {/* Hair darker roots */}
        <path d="M35 14 Q50 8 65 14 Q58 6 50 5 Q42 6 35 14Z" fill="#6A4810" opacity="0.5"/>
        {/* Hair side strands texture left */}
        <path d="M21 30 Q20 36 21 43" stroke="#7A5215" strokeWidth="1.2" fill="none" opacity="0.4"/>
        <path d="M23 28 Q22 35 23 44" stroke="#9A7225" strokeWidth="0.8" fill="none" opacity="0.3"/>
        {/* Hair side strands texture right */}
        <path d="M79 30 Q80 36 79 43" stroke="#7A5215" strokeWidth="1.2" fill="none" opacity="0.4"/>
        <path d="M77 28 Q78 35 77 44" stroke="#9A7225" strokeWidth="0.8" fill="none" opacity="0.3"/>

        {/* Longer hair sides — past ears */}
        <path d="M21 32 Q16 44 18 58 Q22 55 23 50 Q22 41 23 32Z" fill="#8B6018"/>
        <path d="M79 32 Q84 44 82 58 Q78 55 77 50 Q78 41 77 32Z" fill="#8B6018"/>
        {/* Side hair shading */}
        <path d="M21 32 Q17 44 19 55 Q21 52 22 47 Q21 40 22 32Z" fill="#6A4810" opacity="0.4"/>
        <path d="M79 32 Q83 44 81 55 Q79 52 78 47 Q79 40 78 32Z" fill="#6A4810" opacity="0.4"/>

        {/* Sideburns blending to beard */}
        <path d="M22 49 Q20 58 22 63 Q26 59 26 54 Q25 50 22 49Z" fill="#7A5015"/>
        <path d="M78 49 Q80 58 78 63 Q74 59 74 54 Q75 50 78 49Z" fill="#7A5015"/>

        {/* Eyes — whites */}
        <ellipse cx="36" cy="39" rx="6.5" ry="5.5" fill="white"/>
        <ellipse cx="64" cy="39" rx="6.5" ry="5.5" fill="white"/>
        {/* Eye shadow/lid crease */}
        <path d="M29.5 36.5 Q36 33.5 42.5 36.5" fill="#C8905A" opacity="0.25"/>
        <path d="M57.5 36.5 Q64 33.5 70.5 36.5" fill="#C8905A" opacity="0.25"/>
        {/* Eyelid upper line */}
        <path d="M30 37 Q36 34 42 37" stroke="#8B5A30" strokeWidth="1" fill="none" opacity="0.7"/>
        <path d="M58 37 Q64 34 70 37" stroke="#8B5A30" strokeWidth="1" fill="none" opacity="0.7"/>
        {/* Irises */}
        <circle cx="36" cy="39.5" r="3.8" fill="#3d2b1f"/>
        <circle cx="64" cy="39.5" r="3.8" fill="#3d2b1f"/>
        {/* Iris color ring */}
        <circle cx="36" cy="39.5" r="3.2" fill="#4a3428"/>
        <circle cx="64" cy="39.5" r="3.2" fill="#4a3428"/>
        {/* Pupils */}
        <circle cx="36" cy="39.5" r="2" fill="#140c08"/>
        <circle cx="64" cy="39.5" r="2" fill="#140c08"/>
        {/* Eye shine — main */}
        <circle cx="37.5" cy="37.8" r="1.3" fill="white"/>
        <circle cx="65.5" cy="37.8" r="1.3" fill="white"/>
        {/* Eye shine — small secondary */}
        <circle cx="35" cy="41" r="0.6" fill="white" opacity="0.5"/>
        <circle cx="63" cy="41" r="0.6" fill="white" opacity="0.5"/>
        {/* Lower lash line */}
        <path d="M30 42 Q36 44 42 42" stroke="#8B6520" strokeWidth="0.7" fill="none" opacity="0.4"/>
        <path d="M58 42 Q64 44 70 42" stroke="#8B6520" strokeWidth="0.7" fill="none" opacity="0.4"/>

        {/* Eyebrows — arched, thick */}
        <path d="M29 29.5 Q36 25.5 43 28.5" stroke="#6A4510" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        <path d="M57 28.5 Q64 25.5 71 29.5" stroke="#6A4510" strokeWidth="3.2" fill="none" strokeLinecap="round"/>
        {/* Eyebrow highlight — subtle sheen */}
        <path d="M30 29 Q36 25.5 42 28" stroke="#9A7230" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.35"/>
        <path d="M58 28 Q64 25.5 70 29" stroke="#9A7230" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.35"/>

        {/* Nose bridge */}
        <path d="M50 33 Q49 38 48 43" stroke="#D4845A" strokeWidth="1" fill="none" opacity="0.3"/>
        {/* Nose tip and nostrils */}
        <path d="M50 43 Q47 51 45 55 Q50 57.5 55 55 Q53 51 50 43Z" fill="#D4845A" opacity="0.5"/>
        {/* Nose tip ball */}
        <ellipse cx="50" cy="54" rx="4" ry="2.5" fill="#D4845A" opacity="0.3"/>
        {/* Nostrils */}
        <ellipse cx="46.5" cy="54.5" rx="2.2" ry="1.8" fill="#C8855A" opacity="0.4"/>
        <ellipse cx="53.5" cy="54.5" rx="2.2" ry="1.8" fill="#C8855A" opacity="0.4"/>

        {/* Mouth — subtle smile between mustache and beard */}
        <path d="M44 61 Q50 65 56 61" stroke="#C8855A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
        {/* Lip line lower */}
        <path d="M45 62.5 Q50 66 55 62.5" stroke="#B87050" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4"/>

        {/* Mustache — covers upper lip, blends into beard */}
        <path d="M37 57.5 Q50 64.5 63 57.5 Q57 52 50 54 Q43 52 37 57.5Z" fill="#6A4510"/>
        {/* Mustache highlight */}
        <path d="M41 58 Q50 63 59 58 Q55 54.5 50 55.5 Q45 54.5 41 58Z" fill="#8B6020" opacity="0.5"/>

        {/* Beard chin highlight */}
        <ellipse cx="50" cy="73" rx="11" ry="4" fill="#A07830" opacity="0.3"/>

    </svg>
);

export default Avatar;

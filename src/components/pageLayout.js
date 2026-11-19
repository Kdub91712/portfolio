import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SCROLL_THRESHOLD = 16;

export default function PageLayout({ children, overlay, className }) {
    const scrollRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    const [atBottom, setAtBottom] = useState(true);

    const updateScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;

        const overflow = el.scrollHeight - el.clientHeight;
        setCanScroll(overflow > SCROLL_THRESHOLD);
        setAtBottom(el.scrollTop >= overflow - SCROLL_THRESHOLD);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);

        // Content height can change after mount (images, expanded lists, etc.),
        // so keep the cue in sync with the scroll container and its children.
        const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateScrollState) : null;
        if (observer) {
            observer.observe(el);
            Array.from(el.children).forEach((child) => observer.observe(child));
        }

        return () => {
            el.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
            if (observer) observer.disconnect();
        };
    }, [updateScrollState]);

    const scrollDown = () => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ top: Math.round(el.clientHeight * 0.8), behavior: 'smooth' });
    };

    const cueVisible = canScroll && !atBottom;

    return (
        <div className={`main-section page-layout${className ? ` ${className}` : ''}`}>
            <div className="sub-section" ref={scrollRef}>
                {children}
            </div>

            {overlay}

            <button
                type="button"
                className={`scroll-cue${cueVisible ? '' : ' scroll-cue--hidden'}`}
                onClick={scrollDown}
                tabIndex={cueVisible ? 0 : -1}
                aria-hidden={!cueVisible}
                aria-label="Scroll down for more"
            >
                <span className="scroll-cue-label">Scroll</span>
                <span className="scroll-cue-chevron" aria-hidden="true" />
            </button>
        </div>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node,
    overlay: PropTypes.node,
    className: PropTypes.string
};

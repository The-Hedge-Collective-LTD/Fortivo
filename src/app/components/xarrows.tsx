'use client';

import React from 'react';
import Xarrow from 'react-xarrows';

interface GradientArrowProps {
    fromId: string;
    toId: string;
    strokeWidth?: number;
    curvature?: number;
}

const GradientArrow: React.FC<GradientArrowProps> = ({
    fromId,
    toId,
    strokeWidth = 3,
    curvature = 0.5,
}) => {
    const gradientId = `gradient-${fromId}-${toId}`;

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06F3A6" />
                        <stop offset="100%" stopColor="#743EF4" />
                    </linearGradient>
                </defs>
            </svg>

            <Xarrow
                start={fromId}
                end={toId}
                strokeWidth={strokeWidth}
                curveness={curvature}
                color={`url(#${gradientId})`}
                path="smooth"
                showHead={false}
                zIndex={1000}
                passProps={{
                    pointerEvents: 'none'
                }}
            />
        </>
    );
};

export default GradientArrow;
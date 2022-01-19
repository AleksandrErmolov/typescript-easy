import React from 'react';

interface CardProps { 
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
}

export default function Card({ width, height, children}:CardProps) {
    return (<div style={{ width, height, border: "2px solid gray" }}>
        { children } 
    </div>
    )

}

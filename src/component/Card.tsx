import React, { useState } from 'react';

export enum cardVariant { 
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
    variant: cardVariant;
    onClick: (num:number) => void;
}

const Card: React.FC<CardProps> =
    ({
        width,
        height,
        variant,
        onClick,
        children
    }) => {


const [state, setState] = useState(0)

        return (<div style={{
            width, height,
            border: variant === cardVariant.outlined ? "2px solid gray" : 'none',
            background: variant === cardVariant.primary ? 'lightgray' : ''
        }}
        onClick={() => onClick(state)}
        >
            {children}
        </div>
        )

    }

export default Card;
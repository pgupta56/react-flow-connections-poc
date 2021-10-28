import React from 'react';
import Ncs1010olt from "../svg/Ncs1010olt.jsx";

const elements = [
    {
        id: '1',
        type: 'input',
        data: {
            label: (
                <div>
                    <Ncs1010olt />
                </div>
            ),
        },
        position: { x: 150, y: 0 },
        sourcePosition: 'right',
        style: {
            height: 380,
            width: 230,
        }
    },
    {
        id: '3',
        type: 'awg32OPassive',
        position: { x: 800, y: 100 },
        style: {
            color: '#333',
            border: '1px solid #222138',
            borderRadius: 3,
            width: 180,
            height: 200,
        },
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        label: 'Port 1 - Port 2',
        type: 'smoothstep',
        arrowHeadType: 'arrowclosed',
    },
];

export default elements;
import React from 'react';
import Ncs1010olt from "../svg/Ncs1010oltColored.jsx";

//50 nodes connected back to back
/*
 ans = arr.reduce((acc, i) => {
    return [...acc, {
        id: 'e'+i+'-'+(i+1),
        source: ''+i,
        target: ''+(i+1),
        label: 'Port '+i+' - Port '+(i+1),
        type: 'smoothstep',
        arrowHeadType: 'arrowclosed'}]}, []);
 */

const elements = [
    {
        id: '1',
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
        id: '2',
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
        id: '4',
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
        id: '5',
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
        id: '6',
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
        id: '7',
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
        id: '8',
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
        id: '9',
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
        id: '10',
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
        id: '11',
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
        id: '12',
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
        id: '13',
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
        id: '14',
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
        id: '15',
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
        id: '16',
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
        id: '17',
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
        id: '18',
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
        id: '19',
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
        id: '20',
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
        id: '21',
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
        id: '22',
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
        id: '23',
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
        id: '24',
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
        id: '25',
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
        id: '26',
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
        id: '27',
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
        id: '28',
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
        id: '29',
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
        id: '30',
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
        id: '31',
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
        id: '32',
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
        id: '33',
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
        id: '34',
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
    },{
        id: '35',
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
        id: '36',
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
        id: '37',
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
        id: '38',
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
        id: '39',
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
        id: '40',
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
        id: '41',
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
        id: '42',
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
        id: '43',
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
        id: '44',
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
        id: '45',
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
        id: '46',
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
        id: '47',
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
        id: '48',
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
        id: '49',
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
        id: '50',
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
            id: "e0-1",
            source: "0",
            target: "1",
            label: "Port 0 - Port 1",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e1-2",
            source: "1",
            target: "2",
            label: "Port 1 - Port 2",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e2-3",
            source: "2",
            target: "3",
            label: "Port 2 - Port 3",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e3-4",
            source: "3",
            target: "4",
            label: "Port 3 - Port 4",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e4-5",
            source: "4",
            target: "5",
            label: "Port 4 - Port 5",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e5-6",
            source: "5",
            target: "6",
            label: "Port 5 - Port 6",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e6-7",
            source: "6",
            target: "7",
            label: "Port 6 - Port 7",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e7-8",
            source: "7",
            target: "8",
            label: "Port 7 - Port 8",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e8-9",
            source: "8",
            target: "9",
            label: "Port 8 - Port 9",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e9-10",
            source: "9",
            target: "10",
            label: "Port 9 - Port 10",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e10-11",
            source: "10",
            target: "11",
            label: "Port 10 - Port 11",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e11-12",
            source: "11",
            target: "12",
            label: "Port 11 - Port 12",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e12-13",
            source: "12",
            target: "13",
            label: "Port 12 - Port 13",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e13-14",
            source: "13",
            target: "14",
            label: "Port 13 - Port 14",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e14-15",
            source: "14",
            target: "15",
            label: "Port 14 - Port 15",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e15-16",
            source: "15",
            target: "16",
            label: "Port 15 - Port 16",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e16-17",
            source: "16",
            target: "17",
            label: "Port 16 - Port 17",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e17-18",
            source: "17",
            target: "18",
            label: "Port 17 - Port 18",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e18-19",
            source: "18",
            target: "19",
            label: "Port 18 - Port 19",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e19-20",
            source: "19",
            target: "20",
            label: "Port 19 - Port 20",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e20-21",
            source: "20",
            target: "21",
            label: "Port 20 - Port 21",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e21-22",
            source: "21",
            target: "22",
            label: "Port 21 - Port 22",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e22-23",
            source: "22",
            target: "23",
            label: "Port 22 - Port 23",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e23-24",
            source: "23",
            target: "24",
            label: "Port 23 - Port 24",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e24-25",
            source: "24",
            target: "25",
            label: "Port 24 - Port 25",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e25-26",
            source: "25",
            target: "26",
            label: "Port 25 - Port 26",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e26-27",
            source: "26",
            target: "27",
            label: "Port 26 - Port 27",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e27-28",
            source: "27",
            target: "28",
            label: "Port 27 - Port 28",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e28-29",
            source: "28",
            target: "29",
            label: "Port 28 - Port 29",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e29-30",
            source: "29",
            target: "30",
            label: "Port 29 - Port 30",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e30-31",
            source: "30",
            target: "31",
            label: "Port 30 - Port 31",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e31-32",
            source: "31",
            target: "32",
            label: "Port 31 - Port 32",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e32-33",
            source: "32",
            target: "33",
            label: "Port 32 - Port 33",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e33-34",
            source: "33",
            target: "34",
            label: "Port 33 - Port 34",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e34-35",
            source: "34",
            target: "35",
            label: "Port 34 - Port 35",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e35-36",
            source: "35",
            target: "36",
            label: "Port 35 - Port 36",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e36-37",
            source: "36",
            target: "37",
            label: "Port 36 - Port 37",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e37-38",
            source: "37",
            target: "38",
            label: "Port 37 - Port 38",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e38-39",
            source: "38",
            target: "39",
            label: "Port 38 - Port 39",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e39-40",
            source: "39",
            target: "40",
            label: "Port 39 - Port 40",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e40-41",
            source: "40",
            target: "41",
            label: "Port 40 - Port 41",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e41-42",
            source: "41",
            target: "42",
            label: "Port 41 - Port 42",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e42-43",
            source: "42",
            target: "43",
            label: "Port 42 - Port 43",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e43-44",
            source: "43",
            target: "44",
            label: "Port 43 - Port 44",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e44-45",
            source: "44",
            target: "45",
            label: "Port 44 - Port 45",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e45-46",
            source: "45",
            target: "46",
            label: "Port 45 - Port 46",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e46-47",
            source: "46",
            target: "47",
            label: "Port 46 - Port 47",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e47-48",
            source: "47",
            target: "48",
            label: "Port 47 - Port 48",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e48-49",
            source: "48",
            target: "49",
            label: "Port 48 - Port 49",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        },
        {
            id: "e49-50",
            source: "49",
            target: "50",
            label: "Port 49 - Port 50",
            type: "smoothstep",
            arrowHeadType: "arrowclosed"
        }
];

export default elements;
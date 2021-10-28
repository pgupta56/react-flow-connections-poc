import React, {useState} from 'react';

import ReactFlow, {
    removeElements,
    addEdge,
    MiniMap,
    Controls,
    Background,
} from 'react-flow-renderer';

import AAWG32OPassiveNode from "./nodes/AAWG32OPassiveNode";

import initialElements from './resources/data/initial-elements';

const onLoad = (reactFlowInstance) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
};

const nodeTypes = {
    awg32OPassive: AAWG32OPassiveNode
};

const App = () => {
    const [elements, setElements] = useState(initialElements);
    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));


    return (
        <div style={{height: 700}}>
            <ReactFlow
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                onLoad={onLoad}
                snapToGrid={true}
                snapGrid={[15, 15]}
                arrowHeadColor={"#000"}

            >
                <MiniMap
                    nodeStrokeColor={(n) => {
                        if (n.style?.background) return n.style.background;
                        if (n.type === 'input') return '#0041d0';
                        if (n.type === 'output') return '#ff0072';
                        if (n.type === 'default') return '#1a192b';

                        return '#000';
                    }}
                    nodeColor={(n) => {
                        if (n.style?.background) return n.style.background;

                        return '#fff';
                    }}
                    nodeBorderRadius={2}
                />
                <Controls/>
                <Background color="#ff0000" gap={16}/>
            </ReactFlow>
        </div>
    );
};

export default App;

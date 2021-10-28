import {memo} from "react";
import {Handle} from "react-flow-renderer";
import AAWG32OPassive from "../resources/svg/AAWG32OPassive";

const OUTPUT_PORTS = 32;

const AAWG32OPassiveNode = memo(({ data }) => (
    <>
        <AAWG32OPassive />
        <Handle
            type="target"
            position="left"
            id="in-port-1"
            style={{
                top: '40%'
            }}
        />
        <Handle
            type="target"
            position="left"
            id="in-port-2"
            style={{
                top: '60%'
            }}
        />

        {Array.from(Array(OUTPUT_PORTS).keys()).map(key => (
            <Handle
                name={`Port-${key + 1}`}
                type="source"
                position="right"
                id={`out-port-${key + 1}`}
                style={{
                    top: `${1.5625 + (key * 3.125)}%`,
                    borderRadius: 0,
                    width: 4,
                    height: 3,
                    border: 0
                }}
            />
        ))}

    </>
));

export default AAWG32OPassiveNode;
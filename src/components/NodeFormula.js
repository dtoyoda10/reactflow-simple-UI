import React from "react";
import { Handle, Position } from "react-flow-renderer";

export const NodeFormula = ({ data }) => (
  <>
    <Handle type="target" position={Position.Top} />
    <div className="node node-formula">
      <span>{data?.label}</span>
    </div>
    <Handle type="source" position={Position.Bottom} id="a" />
  </>
);

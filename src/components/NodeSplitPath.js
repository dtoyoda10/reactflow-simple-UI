import React from "react";
import { Handle, Position } from "react-flow-renderer";

export const NodeSplitPath = ({ data }) => (
  <>
    <Handle type="target" position={Position.Top} />
    <div className="node node-split">
      <span>{data?.label}</span>
    </div>
    <Handle type="source" position={Position.Bottom} id="a" />
  </>
);

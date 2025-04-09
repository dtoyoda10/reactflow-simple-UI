import React from "react";
import { Handle, Position } from "react-flow-renderer";

export const NodeGoto = ({ data }) => (
  <>
    <Handle type="target" position={Position.Top} />
    <div className="node node-goto">
      <span className="node-goto-title">{data?.label} - </span>
      <select>
        <option label="todo" />
      </select>
    </div>
    <Handle type="source" position={Position.Bottom} id="a" />
  </>
);

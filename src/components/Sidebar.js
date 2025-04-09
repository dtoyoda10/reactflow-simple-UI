import React from "react";

import { NodeType } from "../constants";

export const Sidebar = () => {
  const onDragStartHandler = (nodeType) => (event) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/reactflow/label", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>

      <div
        className="node node-formula"
        onDragStart={onDragStartHandler(NodeType.Formula)}
        draggable
      >
        Formula
      </div>

      <div
        className="node node-goto"
        onDragStart={onDragStartHandler(NodeType.Goto)}
        draggable
      >
        Go To
      </div>
    </aside>
  );
};

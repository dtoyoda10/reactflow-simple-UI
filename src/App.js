/**
 * Level: Jr/JrMid React Developer
 * Exercise: Reactflow 'Goto' Node
 *
 * Skills to evaluate:
 *  - Knowlegde in React and algorithms
 *  - Ability to create reusable components
 *  - Component design patterns
 *  - Code maintenance and readability
 *
 * Goals:
 *  - 'Goto' node should render properly, as a Select/Dropdown component
 *
 * Acceptance criteria:
 *
 *  1.'Goto' nodes should list only nodes that are defined after its position, excluding:
 *    - another Goto nodes
 *    - nodes that are within split paths
 *  2. Once you select a node in the Goto node, the node ID of the selected target should be logged in the console
 *  3. If a node is removed/added, all 'Goto' nodes should be updated with the new values
 *  4. (Bonus) Goto Node should list the nodes in order. (use API_RESPONSE_BONUS)
 *
 * Test cases:
 *  1. `Goto A` should only list Nodes C, D, H, I, End
 *  2. `Goto B` should only list Nodes D, H, I, End
 *  3. `Goto C` should only list Nodes G1, G2, H, I, End
 *
 * Constrains:
 *  1. `constants.js` file shoudn't been modified
 *  2. `utils` files shoudn't been modified
 *
 * Notes:
 *
 *  - Code presented in this `codesandbox` is a template and might have mistakes on purpose, please fix them if is necessary.
 *  - Please feel free to change anything you want without going against constrains listed above.
 *
 * By: Fuse
 */

import React, { useState, useRef } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  ReactFlowProvider,
  removeElements,
} from "react-flow-renderer";

import { getId } from "./utils";
import { API_RESPONSE_BONUS, API_RESPONSE, NODE_TYPES } from "./constants";
import { Sidebar } from "./components";
import "./styles.css";

export default function App() {
  const reactFlowref = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(API_RESPONSE);

  const onConnectHandler = (params) => {
    setElements((elements) => addEdge(params, elements));
  };

  const onElementsRemoveHandler = (elementsToRemove) => {
    setElements((elements) => removeElements(elementsToRemove, elements));
  };

  const onLoadHandler = (instance) => {
    setReactFlowInstance(instance);
  };

  const onDragOverHandler = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDropHandler = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowref.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const node = {
      id: getId(),
      type,
      position,
      data: { label: type },
    };
    setElements((elements) => elements.concat(node));
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowref}>
          <ReactFlow
            elements={elements}
            nodeTypes={NODE_TYPES}
            onConnect={onConnectHandler}
            onDragOver={onDragOverHandler}
            onDrop={onDropHandler}
            onElementsRemove={onElementsRemoveHandler}
            onLoad={onLoadHandler}
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
}

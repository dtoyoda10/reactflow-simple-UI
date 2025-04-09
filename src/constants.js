import { NodeFormula, NodeGoto, NodeSplitPath } from "./components";
import { shuffle } from "./utils";

export const NodeType = {
  End: "output",
  Formula: "formula",
  Goto: "goto",
  Loop: "split",
  SplitPath: "split",
  Start: "input",
};

export const NODE_TYPES = {
  [NodeType.Formula]: NodeFormula,
  [NodeType.Goto]: NodeGoto,
  [NodeType.SplitPath]: NodeSplitPath,
};

export const API_RESPONSE = [
  {
    id: "1",
    type: NodeType.Start,
    data: {
      label: (
        <>
          <strong>Start</strong>
        </>
      ),
    },
    position: { x: 250, y: 100 },
  },
  {
    id: "2",
    type: NodeType.Formula,
    data: {
      label: "Node A",
    },
    position: { x: 100, y: 200 },
  },
  {
    id: "3",
    type: NodeType.Formula,
    data: {
      label: "Node B",
    },
    position: { x: 400, y: 200 },
  },
  {
    id: "4",
    type: NodeType.Goto,
    data: {
      label: "Goto A",
    },
    position: { x: 250, y: 300 },
  },
  {
    id: "5",
    type: NodeType.Formula,
    data: {
      label: "Node C",
    },
    position: { x: 250, y: 400 },
  },
  {
    id: "6",
    type: NodeType.Goto,
    data: {
      label: "Goto B",
    },
    position: { x: 250, y: 500 },
  },
  {
    id: "7",
    type: NodeType.SplitPath,
    data: {
      label: "Node D",
    },
    position: { x: 250, y: 600 },
  },
  {
    id: "8",
    type: NodeType.Formula,
    data: {
      label: "Node E",
    },
    position: { x: 100, y: 700 },
  },
  {
    id: "9",
    type: NodeType.Formula,
    data: {
      label: "Node F",
    },
    position: { x: 400, y: 700 },
  },
  {
    id: "10",
    type: NodeType.Formula,
    data: {
      label: "Node G",
    },
    position: { x: 750, y: 700 },
  },
  {
    id: "101",
    type: NodeType.Goto,
    data: {
      label: "Goto C",
    },
    position: { x: 750, y: 800 },
  },
  {
    id: "102",
    type: NodeType.Formula,
    data: {
      label: "Node G1",
    },
    position: { x: 750, y: 900 },
  },
  {
    id: "103",
    type: NodeType.Formula,
    data: {
      label: "Node G2",
    },
    position: { x: 750, y: 1000 },
  },
  {
    id: "11",
    type: NodeType.Formula,
    data: {
      label: "Node H",
    },
    position: { x: 250, y: 1100 },
  },
  {
    id: "12",
    type: NodeType.Formula,
    data: {
      label: "Node I",
    },
    position: { x: 250, y: 1200 },
  },
  {
    id: "100",
    type: NodeType.End,
    data: { label: "End" },
    position: { x: 250, y: 1300 },
  },
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
  },
  {
    animated: true,
    id: "e7-8",
    label: "split path 1",
    source: "7",
    target: "8",
  },
  {
    animated: true,
    id: "e8-11",
    source: "8",
    target: "11",
  },
  {
    animated: true,
    id: "e7-9",
    label: "split path 2",
    source: "7",
    target: "9",
  },
  {
    animated: true,
    id: "e9-11",
    source: "9",
    target: "11",
  },
  {
    animated: true,
    id: "e7-10",
    label: "split path 3",
    source: "7",
    target: "10",
  },
  {
    id: "e10-101",
    source: "10",
    target: "101",
  },
  {
    id: "e101-102",
    source: "101",
    target: "102",
  },
  {
    id: "e102-103",
    source: "102",
    target: "103",
  },
  {
    id: "e103-11",
    source: "103",
    target: "11",
    animated: true,
  },
  {
    id: "e11-12",
    source: "11",
    target: "12",
  },
  {
    id: "e12-100",
    source: "12",
    target: "100",
  },
];

export const API_RESPONSE_BONUS = shuffle(API_RESPONSE);

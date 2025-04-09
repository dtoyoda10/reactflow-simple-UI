# React Flow UI

A simple and extensible React application using [React Flow](https://reactflow.dev/) to build node-based diagrams for workflows, logic builders, or visual scripting tools.



##  Features

-  Drag-and-drop node layout  
-  Connect nodes with edges  
-  Auto-layout support  
-  Custom node types and styling  
-  React Flow hooks & events integrated  



##  Tech Stack

- React
- React Flow (`@xyflow/react`)
- Tailwind CSS (optional)
- Zustand (for state management, optional)



##  Installation

```bash
git clone https://github.com/dtoyoda10/reactflow-simple-UI.git
cd reactflow-simple-UI
npm install
npm run dev
```



##  Customization

You can customize:
- Node types (`nodeTypes`)
- Edge types (`edgeTypes`)
- Layout logic (`useLayout` hook)
- Styling (CSS/Tailwind/Styled-components)



##  Example Node

```jsx
const CustomNode = ({ data }) => (
  <div className="bg-white border rounded p-2 shadow">
    <h4>{data.title}</h4>
  </div>
);
```

## 👨‍💻 Author

Created by [Daichi](https://dtoyoda10.vercel.app/)

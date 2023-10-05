import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import ReactFlow, { Background, BackgroundVariant, Controls, EdgeChange, NodeChange, applyEdgeChanges, applyNodeChanges } from "reactflow";
import 'reactflow/dist/style.css';

export interface MyFlowProps {
    name: string
}

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export function MyFlow(props: MyFlowProps) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChange = useCallback( (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),[] );
    const onEdgesChange = useCallback( (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );
    
   return <div style={{ width: '100vw', height: '50vh' }}>
            <Typography variant="h1" sx={{textTransform: "uppercase"}}>{props.name}
            </Typography>
            
                <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} >
                    <Background variant={BackgroundVariant.Cross}/>
                    <Controls/>
                </ReactFlow>

          </div>
}

export default MyFlow;
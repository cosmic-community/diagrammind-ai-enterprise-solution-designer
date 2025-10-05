'use client'

import { useCallback } from 'react'
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge
} from 'reactflow'
import 'reactflow/dist/style.css'
import type { ReactFlowJSON } from '@/types'

interface DiagramViewerProps {
  data: ReactFlowJSON
  title: string
}

export default function DiagramViewer({ data, title }: DiagramViewerProps) {
  const { nodes, edges } = data
  
  if (!nodes || nodes.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <p className="text-gray-600">No diagram data available</p>
      </div>
    )
  }
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
      <ReactFlow
        nodes={nodes as Node[]}
        edges={edges as Edge[]}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'input': return '#3B82F6'
              case 'output': return '#10B981'
              default: return '#6B7280'
            }
          }}
        />
      </ReactFlow>
    </div>
  )
}
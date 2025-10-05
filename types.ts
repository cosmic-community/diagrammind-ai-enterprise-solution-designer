// Base Cosmic object interface
interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
  thumbnail?: string
}

// Workspace interface
export interface Workspace extends CosmicObject {
  type: 'workspaces'
  metadata: {
    workspace_name: string
    description?: string
    plan_type: {
      key: 'free' | 'starter' | 'business'
      value: 'Free' | 'Starter' | 'Business'
    }
    stripe_customer_id?: string
    stripe_subscription_id?: string
    usage_diagrams?: number
    usage_docs?: number
    usage_decks?: number
    usage_reset_date?: string
    active_status?: boolean
  }
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    project_name: string
    description?: string
    workspace: Workspace | string
    project_type: {
      key: 'architecture' | 'process' | 'integration' | 'infrastructure'
      value: 'System Architecture' | 'Process Design' | 'Integration Design' | 'Infrastructure Design'
    }
    status: {
      key: 'draft' | 'active' | 'review' | 'archived'
      value: 'Draft' | 'Active' | 'In Review' | 'Archived'
    }
    ai_prompt?: string
    gemini_model?: {
      key: 'gemini-2.5-flash' | 'gemini-1.5-pro'
      value: 'Gemini 2.5 Flash' | 'Gemini 1.5 Pro'
    }
    export_formats?: string[]
    created_date?: string
  }
}

// Diagram interface with React Flow types
export interface ReactFlowNode {
  id: string
  type?: string
  position: {
    x: number
    y: number
  }
  data: {
    label: string
  }
}

export interface ReactFlowEdge {
  id: string
  source: string
  target: string
  label?: string
  animated?: boolean
}

export interface ReactFlowJSON {
  nodes: ReactFlowNode[]
  edges: ReactFlowEdge[]
}

export interface Diagram extends CosmicObject {
  type: 'diagrams'
  metadata: {
    diagram_title: string
    project: Project | string
    diagram_type: {
      key: 'architecture' | 'process' | 'network' | 'sequence' | 'data-flow'
      value: 'Architecture Diagram' | 'Process Flowchart' | 'Network Diagram' | 'Sequence Diagram' | 'Data Flow Diagram'
    }
    react_flow_json?: ReactFlowJSON
    generation_prompt?: string
    gemini_model?: string
    version?: string
    preview_image?: {
      url: string
      imgix_url: string
    }
    created_date?: string
  }
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members'
  metadata: {
    member_name: string
    email: string
    role: {
      key: 'owner' | 'admin' | 'editor' | 'viewer'
      value: 'Owner' | 'Admin' | 'Editor' | 'Viewer'
    }
    workspace: Workspace | string
    status: {
      key: 'active' | 'pending' | 'suspended'
      value: 'Active' | 'Pending' | 'Suspended'
    }
    join_date?: string
    profile_image?: {
      url: string
      imgix_url: string
    }
  }
}

// Type literals for select-dropdown values
export type PlanType = 'free' | 'starter' | 'business'
export type ProjectType = 'architecture' | 'process' | 'integration' | 'infrastructure'
export type ProjectStatus = 'draft' | 'active' | 'review' | 'archived'
export type DiagramType = 'architecture' | 'process' | 'network' | 'sequence' | 'data-flow'
export type MemberRole = 'owner' | 'admin' | 'editor' | 'viewer'
export type MemberStatus = 'active' | 'pending' | 'suspended'
export type GeminiModel = 'gemini-2.5-flash' | 'gemini-1.5-pro'

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Type guards
export function isWorkspace(obj: CosmicObject): obj is Workspace {
  return obj.type === 'workspaces'
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects'
}

export function isDiagram(obj: CosmicObject): obj is Diagram {
  return obj.type === 'diagrams'
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members'
}

// Helper function for error handling
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}
import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Import types
import type { 
  Workspace, 
  Project, 
  Diagram, 
  TeamMember,
  CosmicResponse 
} from '@/types'

// Fetch all workspaces
export async function getWorkspaces(): Promise<Workspace[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'workspaces'
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)
    
    return response.objects as Workspace[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch workspaces')
  }
}

// Fetch single workspace by slug
export async function getWorkspaceBySlug(slug: string): Promise<Workspace | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'workspaces',
      slug
    }).props(['id', 'title', 'slug', 'metadata', 'thumbnail']).depth(1)
    
    return response.object as Workspace
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch workspace')
  }
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects'
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)
    
    return response.objects as Project[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'projects',
      slug
    }).props(['id', 'title', 'slug', 'metadata', 'thumbnail']).depth(1)
    
    return response.object as Project
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch project')
  }
}

// Fetch projects by workspace
export async function getProjectsByWorkspace(workspaceId: string): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects',
        'metadata.workspace': workspaceId
      })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail'])
      .depth(1)
    
    return response.objects as Project[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch projects')
  }
}

// Fetch all diagrams
export async function getDiagrams(): Promise<Diagram[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'diagrams'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Diagram[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch diagrams')
  }
}

// Fetch single diagram by slug
export async function getDiagramBySlug(slug: string): Promise<Diagram | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'diagrams',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    
    return response.object as Diagram
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch diagram')
  }
}

// Fetch diagrams by project
export async function getDiagramsByProject(projectId: string): Promise<Diagram[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'diagrams',
        'metadata.project': projectId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Diagram[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch diagrams')
  }
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'team-members'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

// Fetch team members by workspace
export async function getTeamMembersByWorkspace(workspaceId: string): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'team-members',
        'metadata.workspace': workspaceId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}
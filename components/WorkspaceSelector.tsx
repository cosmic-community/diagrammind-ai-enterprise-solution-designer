import { getWorkspaces } from '@/lib/cosmic'
import { Building2 } from 'lucide-react'

export default async function WorkspaceSelector() {
  const workspaces = await getWorkspaces()
  
  if (!workspaces || workspaces.length === 0) {
    return null
  }
  
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-secondary-lighter rounded-lg border border-secondary-lighter">
      <Building2 className="w-4 h-4 text-gray-400" />
      <select className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer">
        <option value="">All Workspaces</option>
        {workspaces.map((workspace) => (
          <option key={workspace.id} value={workspace.id}>
            {workspace.metadata.workspace_name}
          </option>
        ))}
      </select>
    </div>
  )
}
// Format date to readable string
export function formatDate(dateString: string | undefined): string {
  if (!dateString) return 'N/A'
  
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get plan limits based on plan type
export function getPlanLimits(planType: string) {
  const limits = {
    free: { diagrams: 10, docs: 5, decks: 2 },
    starter: { diagrams: 200, docs: 100, decks: 50 },
    business: { diagrams: 1000, docs: 500, decks: 250 }
  }
  
  const key = planType.toLowerCase() as keyof typeof limits
  return limits[key] || limits.free
}

// Calculate usage percentage
export function getUsagePercentage(used: number, limit: number): number {
  if (limit === 0) return 0
  return Math.min(Math.round((used / limit) * 100), 100)
}

// Get status color class
export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    suspended: 'bg-red-100 text-red-800',
    draft: 'bg-gray-100 text-gray-800',
    review: 'bg-blue-100 text-blue-800',
    archived: 'bg-gray-100 text-gray-600'
  }
  
  return statusColors[status.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

// Get role color class
export function getRoleColor(role: string): string {
  const roleColors: Record<string, string> = {
    owner: 'bg-purple-100 text-purple-800',
    admin: 'bg-blue-100 text-blue-800',
    editor: 'bg-green-100 text-green-800',
    viewer: 'bg-gray-100 text-gray-800'
  }
  
  return roleColors[role.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

// Get plan badge color
export function getPlanColor(plan: string): string {
  const planColors: Record<string, string> = {
    free: 'bg-gray-100 text-gray-800',
    starter: 'bg-blue-100 text-blue-800',
    business: 'bg-purple-100 text-purple-800'
  }
  
  return planColors[plan.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

// Truncate text to specified length
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Get diagram type icon name
export function getDiagramTypeIcon(type: string): string {
  const iconMap: Record<string, string> = {
    architecture: 'Building2',
    process: 'Workflow',
    network: 'Network',
    sequence: 'ArrowRightLeft',
    'data-flow': 'Database'
  }
  
  return iconMap[type.toLowerCase()] || 'FileBox'
}

// Format export formats array for display
export function formatExportFormats(formats: string[] | undefined): string {
  if (!formats || formats.length === 0) return 'None'
  return formats.join(', ')
}
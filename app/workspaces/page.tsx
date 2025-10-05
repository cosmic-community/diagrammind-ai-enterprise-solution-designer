import { getWorkspaces } from '@/lib/cosmic'
import { getPlanLimits, getPlanColor } from '@/lib/utils'
import { Building2, Users, TrendingUp } from 'lucide-react'
import UsageCard from '@/components/UsageCard'
import { Sparkles, FileText, Presentation } from 'lucide-react'

export default async function WorkspacesPage() {
  const workspaces = await getWorkspaces()
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Workspaces</h1>
            <p className="text-lg text-gray-600">
              Manage your team workspaces and track AI usage
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
            <Building2 className="w-5 h-5 text-gray-400" />
            <span className="text-gray-900 font-semibold">{workspaces.length} Workspaces</span>
          </div>
        </div>
        
        {workspaces.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No workspaces found</p>
          </div>
        ) : (
          <div className="space-y-8">
            {workspaces.map((workspace) => {
              const limits = getPlanLimits(workspace.metadata.plan_type.key)
              
              return (
                <div key={workspace.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {workspace.thumbnail && (
                    <img 
                      src={`${workspace.thumbnail}?w=2400&h=400&fit=crop&auto=format,compress`}
                      alt={workspace.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {workspace.metadata.workspace_name}
                        </h2>
                        {workspace.metadata.description && (
                          <p className="text-gray-600 mb-3">{workspace.metadata.description}</p>
                        )}
                        <span className={`badge ${getPlanColor(workspace.metadata.plan_type.key)} text-base`}>
                          {workspace.metadata.plan_type.value} Plan
                        </span>
                      </div>
                      <div className="text-right">
                        {workspace.metadata.active_status && (
                          <span className="badge bg-green-100 text-green-800">Active</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <UsageCard 
                        title="AI Diagrams"
                        used={workspace.metadata.usage_diagrams || 0}
                        planType={workspace.metadata.plan_type.key}
                        type="diagrams"
                        icon={<Sparkles className="w-5 h-5 text-primary" />}
                      />
                      
                      <UsageCard 
                        title="AI Documents"
                        used={workspace.metadata.usage_docs || 0}
                        planType={workspace.metadata.plan_type.key}
                        type="docs"
                        icon={<FileText className="w-5 h-5 text-accent" />}
                      />
                      
                      <UsageCard 
                        title="AI Decks"
                        used={workspace.metadata.usage_decks || 0}
                        planType={workspace.metadata.plan_type.key}
                        type="decks"
                        icon={<Presentation className="w-5 h-5 text-purple-600" />}
                      />
                    </div>
                    
                    {workspace.metadata.stripe_customer_id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Stripe Customer ID:</span>
                            <code className="px-2 py-1 bg-gray-100 rounded text-gray-900 font-mono">
                              {workspace.metadata.stripe_customer_id}
                            </code>
                          </div>
                          {workspace.metadata.usage_reset_date && (
                            <div className="text-sm text-gray-600">
                              Usage resets: {workspace.metadata.usage_reset_date}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
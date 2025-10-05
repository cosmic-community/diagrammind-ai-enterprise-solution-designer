import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import { Users } from 'lucide-react'

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Team Members</h1>
            <p className="text-lg text-gray-600">
              Manage team access and roles across workspaces
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
            <Users className="w-5 h-5 text-gray-400" />
            <span className="text-gray-900 font-semibold">{teamMembers.length} Members</span>
          </div>
        </div>
        
        {teamMembers.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No team members found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
import { formatDate, getStatusColor, getRoleColor } from '@/lib/utils'
import { Mail, Calendar } from 'lucide-react'
import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const workspace = typeof member.metadata.workspace === 'object'
    ? member.metadata.workspace
    : null
  
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4">
        {member.metadata.profile_image && (
          <img 
            src={`${member.metadata.profile_image.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={member.metadata.member_name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{member.metadata.member_name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Mail className="w-4 h-4" />
                <span>{member.metadata.email}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className={`badge ${getRoleColor(member.metadata.role.value)}`}>
                {member.metadata.role.value}
              </span>
              <span className={`badge ${getStatusColor(member.metadata.status.value)}`}>
                {member.metadata.status.value}
              </span>
            </div>
          </div>
          
          {member.metadata.join_date && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
              <Calendar className="w-4 h-4" />
              <span>Joined {formatDate(member.metadata.join_date)}</span>
            </div>
          )}
          
          {workspace && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                Workspace: <span className="font-medium text-gray-900">{workspace.metadata.workspace_name}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
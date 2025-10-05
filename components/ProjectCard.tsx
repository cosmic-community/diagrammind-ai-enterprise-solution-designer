import Link from 'next/link'
import { formatDate, getStatusColor } from '@/lib/utils'
import { Calendar, Sparkles, FileText } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const workspace = typeof project.metadata.workspace === 'object' 
    ? project.metadata.workspace 
    : null
  
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card p-6 h-full hover:border-primary transition-all duration-200">
        {project.thumbnail && (
          <img 
            src={`${project.thumbnail}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.metadata.project_name}</h3>
          <span className={`badge ${getStatusColor(project.metadata.status.value)}`}>
            {project.metadata.status.value}
          </span>
        </div>
        
        {project.metadata.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {project.metadata.description}
          </p>
        )}
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileText className="w-4 h-4" />
            <span>{project.metadata.project_type.value}</span>
          </div>
          
          {project.metadata.gemini_model && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{project.metadata.gemini_model.value}</span>
            </div>
          )}
          
          {project.metadata.created_date && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(project.metadata.created_date)}</span>
            </div>
          )}
        </div>
        
        {workspace && (
          <div className="pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Workspace: <span className="font-medium text-gray-900">{workspace.metadata.workspace_name}</span>
            </p>
          </div>
        )}
        
        {project.metadata.export_formats && project.metadata.export_formats.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.metadata.export_formats.map((format) => (
              <span key={format} className="badge bg-blue-100 text-blue-800">
                {format}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
// app/projects/[slug]/page.tsx
import { getProjectBySlug, getDiagramsByProject } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import DiagramCard from '@/components/DiagramCard'
import { formatDate, getStatusColor } from '@/lib/utils'
import { Calendar, Sparkles, FileText, Building2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }
  
  const diagrams = await getDiagramsByProject(project.id)
  const workspace = typeof project.metadata.workspace === 'object'
    ? project.metadata.workspace
    : null
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {project.thumbnail && (
            <img 
              src={`${project.thumbnail}?w=2400&h=600&fit=crop&auto=format,compress`}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          )}
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {project.metadata.project_name}
                </h1>
                <span className={`badge ${getStatusColor(project.metadata.status.value)}`}>
                  {project.metadata.status.value}
                </span>
              </div>
            </div>
            
            {project.metadata.description && (
              <p className="text-lg text-gray-600 mb-6">
                {project.metadata.description}
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Project Type</p>
                  <p className="font-semibold text-gray-900">{project.metadata.project_type.value}</p>
                </div>
              </div>
              
              {project.metadata.gemini_model && (
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">AI Model</p>
                    <p className="font-semibold text-gray-900">{project.metadata.gemini_model.value}</p>
                  </div>
                </div>
              )}
              
              {workspace && (
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Workspace</p>
                    <p className="font-semibold text-gray-900">{workspace.metadata.workspace_name}</p>
                  </div>
                </div>
              )}
              
              {project.metadata.created_date && (
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Created</p>
                    <p className="font-semibold text-gray-900">{formatDate(project.metadata.created_date)}</p>
                  </div>
                </div>
              )}
            </div>
            
            {project.metadata.ai_prompt && (
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Generation Prompt
                </h2>
                <p className="text-gray-700">{project.metadata.ai_prompt}</p>
              </div>
            )}
            
            {project.metadata.export_formats && project.metadata.export_formats.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Export Formats</h2>
                <div className="flex flex-wrap gap-2">
                  {project.metadata.export_formats.map((format) => (
                    <span key={format} className="badge bg-blue-100 text-blue-800 text-base">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {diagrams.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Project Diagrams ({diagrams.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagrams.map((diagram) => (
                <DiagramCard key={diagram.id} diagram={diagram} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
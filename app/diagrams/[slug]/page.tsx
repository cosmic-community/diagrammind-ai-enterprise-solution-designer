// app/diagrams/[slug]/page.tsx
import { getDiagramBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import DiagramViewer from '@/components/DiagramViewer'
import { formatDate } from '@/lib/utils'
import { Calendar, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface DiagramPageProps {
  params: Promise<{ slug: string }>
}

export default async function DiagramPage({ params }: DiagramPageProps) {
  const { slug } = await params
  const diagram = await getDiagramBySlug(slug)
  
  if (!diagram) {
    notFound()
  }
  
  const project = typeof diagram.metadata.project === 'object'
    ? diagram.metadata.project
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
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {diagram.metadata.diagram_title}
              </h1>
              <span className="badge bg-purple-100 text-purple-800 text-base">
                {diagram.metadata.diagram_type.value}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {diagram.metadata.gemini_model && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-600">AI Model</p>
                  <p className="font-semibold text-gray-900">{diagram.metadata.gemini_model}</p>
                </div>
              </div>
            )}
            
            {diagram.metadata.version && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Version</p>
                  <p className="font-semibold text-gray-900">{diagram.metadata.version}</p>
                </div>
              </div>
            )}
            
            {diagram.metadata.created_date && (
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Created</p>
                  <p className="font-semibold text-gray-900">{formatDate(diagram.metadata.created_date)}</p>
                </div>
              </div>
            )}
          </div>
          
          {diagram.metadata.generation_prompt && (
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Generation Prompt
              </h2>
              <p className="text-gray-700">{diagram.metadata.generation_prompt}</p>
            </div>
          )}
          
          {project && (
            <div className="mb-6">
              <Link 
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark"
              >
                View Project: {project.metadata.project_name}
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          )}
        </div>
        
        {diagram.metadata.react_flow_json && (
          <DiagramViewer 
            data={diagram.metadata.react_flow_json} 
            title={diagram.metadata.diagram_title}
          />
        )}
      </div>
    </div>
  )
}
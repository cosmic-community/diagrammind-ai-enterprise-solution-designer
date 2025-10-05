import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import { FileText } from 'lucide-react'

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
            <p className="text-lg text-gray-600">
              Explore AI-powered solution design projects across workspaces
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-gray-900 font-semibold">{projects.length} Projects</span>
          </div>
        </div>
        
        {projects.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No projects found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
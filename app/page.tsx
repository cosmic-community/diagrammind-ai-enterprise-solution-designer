import { getWorkspaces, getProjects, getDiagrams } from '@/lib/cosmic'
import Link from 'next/link'
import { 
  Sparkles, 
  FileText, 
  Presentation, 
  Users, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react'

export default async function HomePage() {
  const workspaces = await getWorkspaces()
  const projects = await getProjects()
  const diagrams = await getDiagrams()
  
  const totalUsageDiagrams = workspaces.reduce((sum, ws) => sum + (ws.metadata.usage_diagrams || 0), 0)
  const totalUsageDocs = workspaces.reduce((sum, ws) => sum + (ws.metadata.usage_docs || 0), 0)
  const totalUsageDecks = workspaces.reduce((sum, ws) => sum + (ws.metadata.usage_decks || 0), 0)
  
  return (
    <div className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-lighter min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by Gemini 2.5 Flash + Firebase
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            DiagramMind AI
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From idea to architecture to delivery — turn your words into <span className="text-primary">diagrams</span>, <span className="text-accent">documents</span>, and <span className="text-purple-400">presentations</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/workspaces"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
            >
              View Workspaces
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Workspaces</p>
                  <p className="text-2xl font-bold text-gray-900">{workspaces.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Projects</p>
                  <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">AI Diagrams</p>
                  <p className="text-2xl font-bold text-gray-900">{diagrams.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Usage</p>
                  <p className="text-2xl font-bold text-gray-900">{totalUsageDiagrams + totalUsageDocs + totalUsageDecks}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Core Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Diagram Generation</h3>
              <p className="text-gray-300 mb-4">
                Convert text prompts into architecture and process diagrams using Gemini 2.5 Flash with intelligent auto-layout and semantic themes.
              </p>
              <Link href="/diagrams/aws-cloud-infrastructure" className="text-primary hover:text-primary-light inline-flex items-center gap-2">
                View Example
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mb-4">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Document Builder</h3>
              <p className="text-gray-300 mb-4">
                Generate Statements of Work, High-Level Design, and Technical Docs with auto-sections and professional formatting.
              </p>
              <Link href="/projects" className="text-accent hover:text-accent-light inline-flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Presentation className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Presentation Decks</h3>
              <p className="text-gray-300 mb-4">
                Build executive-style slide decks with titles, bullets, and embedded diagrams. Export to PPTX or PDF instantly.
              </p>
              <Link href="/projects" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2">
                See Examples
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Usage Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Platform Usage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Diagrams</h3>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary mb-2">{totalUsageDiagrams}</p>
              <p className="text-sm text-gray-600">Generated across all workspaces</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Documents</h3>
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <p className="text-4xl font-bold text-accent mb-2">{totalUsageDocs}</p>
              <p className="text-sm text-gray-600">Created with AI assistance</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Decks</h3>
                <Presentation className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-4xl font-bold text-purple-600 mb-2">{totalUsageDecks}</p>
              <p className="text-sm text-gray-600">Presentation decks generated</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join teams using DiagramMind AI to create professional diagrams, documents, and presentations in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/workspaces"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Workspaces
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/team"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              View Team Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
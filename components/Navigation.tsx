import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import WorkspaceSelector from './WorkspaceSelector'

export default function Navigation() {
  return (
    <nav className="bg-secondary border-b border-secondary-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <Sparkles className="w-6 h-6 text-primary" />
              DiagramMind AI
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/projects" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Projects
              </Link>
              <Link 
                href="/workspaces" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Workspaces
              </Link>
              <Link 
                href="/team" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Team
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <WorkspaceSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Sparkles, Calendar } from 'lucide-react'
import type { Diagram } from '@/types'

interface DiagramCardProps {
  diagram: Diagram
}

export default function DiagramCard({ diagram }: DiagramCardProps) {
  return (
    <Link href={`/diagrams/${diagram.slug}`}>
      <div className="card p-6 h-full hover:border-primary transition-all duration-200">
        {diagram.metadata.preview_image && (
          <img 
            src={`${diagram.metadata.preview_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={diagram.metadata.diagram_title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{diagram.metadata.diagram_title}</h3>
          <span className="badge bg-purple-100 text-purple-800">
            {diagram.metadata.diagram_type.value}
          </span>
        </div>
        
        {diagram.metadata.generation_prompt && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {diagram.metadata.generation_prompt}
          </p>
        )}
        
        <div className="space-y-2">
          {diagram.metadata.gemini_model && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{diagram.metadata.gemini_model}</span>
            </div>
          )}
          
          {diagram.metadata.version && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Version:</span>
              <span>{diagram.metadata.version}</span>
            </div>
          )}
          
          {diagram.metadata.created_date && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(diagram.metadata.created_date)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
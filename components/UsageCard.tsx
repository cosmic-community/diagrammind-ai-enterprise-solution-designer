import { getPlanLimits, getUsagePercentage } from '@/lib/utils'
import { TrendingUp } from 'lucide-react'

interface UsageCardProps {
  title: string
  used: number
  planType: string
  type: 'diagrams' | 'docs' | 'decks'
  icon: React.ReactNode
}

export default function UsageCard({ title, used, planType, type, icon }: UsageCardProps) {
  const limits = getPlanLimits(planType)
  const limit = limits[type]
  const percentage = getUsagePercentage(used, limit)
  
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold text-gray-900">{used}</span>
          <span className="text-sm text-gray-600">of {limit}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary rounded-full h-2 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{percentage}% used</span>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>{limit - used} remaining</span>
          </div>
        </div>
      </div>
    </div>
  )
}
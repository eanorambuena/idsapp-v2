'use client'

import { CustomPluginManager } from '@/components/CustomPluginManager'

export default function PluginsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CustomPluginManager />
      </div>
    </div>
  )
}

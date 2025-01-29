// pages/index.js
import React from 'react'
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deepseek-Hub aggregates the most valuable Deepseek-related information',
  description: 'Deepseek Hub aggregates the best Deepseek-related information, including the top AI practices based on Deepseek, as well as updates from official sources.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  }
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          DeepSeek-Hub
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Aggregates the most valuable Deepseek-related information</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          {metadata.description}
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}
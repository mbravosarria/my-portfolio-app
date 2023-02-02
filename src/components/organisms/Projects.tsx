import React from 'react'
import { projects } from '@/db/personal-info'
import ProjectItem from '../molecules/ProjectItem'

function Projects() {
  return (
    <div id="projects" className="flex flex-col space-y-8">
      <h1 className="font-bold text-blue text-xl">Projects</h1>
      <div className="flex flex-col space-y-8">
        {projects.map((item) => (
          <div key={item.title}>
            <ProjectItem item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

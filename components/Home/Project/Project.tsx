import React from 'react'
import SectionHanding from '@/components/Helper/SectionHanding'
import Link from 'next/link'
import Image from 'next/image'
import { projectData } from '@/Data/data'

const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        
        <SectionHanding>My Project</SectionHanding>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
            {projectData.map((project) => {
                return <div key={project.id}>
                    <Link href={project.url} target='_blank'>
                    <Image src={project.image} alt='project' 
                    width={300}
                    height={200} 
                    className='w-full'/>
                    </Link>
                </div>
            })}
       
        </div>
      
    </div>
  )
}

export default Project

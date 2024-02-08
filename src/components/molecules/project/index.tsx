import React from 'react'
import Image from 'next/image'
import "./style.css";
import Link from 'next/link'

export default function Project({ client, title }: { client: string, title: string }) {
  // Interpolate the client variable into the image source
  const imagePath = `/photos/cover-${client}.png`;

  return (
    <Link href={`./projects/${encodeURIComponent(client)}`}>
      {/* <div className='project d-flex gap-100'>
        <div className='project-cover'>
          <div className='full-width-image-container' style={{ height: '480px' }}>
            <Image src={imagePath} alt={`${client} cover image`} width='1200' height='480'></Image>
          </div>
        </div>
        <div className="project-info">
          <h6 className='sans'>
            {client}
          </h6>
          <h4>
            {title}
          </h4>
        </div>
      </div> */}
      <div className='project'>
        <div className="cover">
          {/* <Image src={imagePath} width='1200' height='720' alt="this is the description" layout='responsive'/> */}
          <div className="cover-bg">
            <Image src='/projects/devf/cover-bg.png' width='1200' height='720' alt="this is the description" layout='responsive'/> 
          </div>
          <div className="cover-window">
            <Image src='/projects/devf/cover-window.png' width='800' height='500' alt="this is the description" layout='responsive'/> 
          </div>
        </div>
        <div className='title'>
          <p>{client}</p>
          <h6>{title}</h6>
        </div>
      </div>
    </Link>
  )
}

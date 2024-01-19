import React from 'react'
import Image from 'next/image'
import "./style.css";
import Link from 'next/link'

export default function Project({ client, title }: { client: string, title: string }) {
  // Interpolate the client variable into the image source
  const imagePath = `/photos/cover-${client}.png`;

  return (
    <Link href={`./projects/${encodeURIComponent(client)}`}>
      <div className='project'>
        <div className='project-cover'>
          <div className='full-width-image-container' style={{ height: '480px' }}>
            <Image src={imagePath} alt={`${client} cover image`} width='1200' height='480'></Image>
          </div>
        </div>
        <div className="project-info">
          <h4>
            {client}
          </h4>
          <p>
            {title}
          </p>
        </div>
      </div>
    </Link>
  )
}

import React from 'react'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'

function Footer() {
  return (
    <div className='flex gap-12 p-6 px-16 border-t border-gray-200 justify-center'>
        <a className="" href="https://github.com/lisaemilsson" target={'_blank'}> <GitHubLogoIcon width={20} height={20}/></a>
        <a className="" href="https://www.linkedin.com/in/lisa-emilson-6bbaa8224/" target={'_blank'}> <LinkedInLogoIcon width={20} height={20}/></a>
        <a className=""  href="https://www.instagram.com/lisaemilson/" target={'_blank'}> <InstagramLogoIcon width={20} height={20}/></a>
    </div>
    // <><ul className="flex gap-12 justify-center items-center p-4 backdrop-blur-lg border-b bg-white bg-opacity-60 border-gray-200 md-gap-16">
    //   <a
    //     className="flex gap-4 justify-center items-center"
    //     href="https://github.com/lisaemilsson"
    //     target={'_blank'}
    //   >
    //     <GitHubLogoIcon width={20} height={20} />
    //     <li className="hidden md:block">Github</li>
    //   </a>
    //   <a
    //     className="flex gap-4 justify-center items-center"
    //     href="https://www.linkedin.com/in/lisa-emilson-6bbaa8224/"
    //     target={'_blank'}
    //   >
    //     <LinkedInLogoIcon width={20} height={20} />
    //     <li className="hidden md:block">LinkedIn</li>
    //   </a>
    //   <a
    //     className="flex gap-4 justify-center items-center"
    //     href="https://www.instagram.com/lisaemilson/"
    //     target={'_blank'}
    //   >
    //     <InstagramLogoIcon width={20} height={20} />
    //     <li className="hidden md:block">Instagram</li>
    //   </a>
    //   <li><h1>Lisa Emilson - UX/UI Designer</h1></li>

    // </ul><div className='flex p-4 px-16 items-end justify-end border-t border-gray-200'>Lisa Emilson - UX/UI Designer</div></>
  )
}

export default Footer
import React from 'react'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'

function Footer() {
  return (
    <div className='flex gap-12 p-6 px-16 border-t border-gray-200 justify-center'>
        <a href="https://github.com/lisaemilsson" target={'_blank'}> <GitHubLogoIcon width={20} height={20}/></a>
        <a href="https://www.linkedin.com/in/lisa-emilson-6bbaa8224/" target={'_blank'}> <LinkedInLogoIcon width={20} height={20}/></a>
        <a href="https://www.instagram.com/lisaemilson/" target={'_blank'}> <InstagramLogoIcon width={20} height={20}/></a>
    </div>
  )
}

export default Footer
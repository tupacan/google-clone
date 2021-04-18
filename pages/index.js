import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center text-sm text-gray-800 py-2 px-4">

        {/* Left Section */}
        <div className="flex space-x-5">
          <a className="basic-link" href="#">About</a>
          <a className="basic-link" href="#">Store</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          <a className="basic-link" href="#">Gmail</a>
          <a className="basic-link" href="#">Images</a>

          {/* Icon */}
          <div className="w-10 h-10 rounded-full text-gray-500 p-2 cursor-pointer hover:bg-gray-100">
            <ViewGridIcon />
          </div>


          {/* Avatar */}
          <Avatar url='https://lh3.googleusercontent.com/ogw/ADGmqu9NuKcDqz9E5mtcMMZUuLpkKQD_GCc-zhozKwPRgvo=s192-c-mo' />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}

    </div>
  )
}

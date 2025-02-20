'use client'

import * as React from 'react'
import Link from 'next/link'

export function Navbar() {

  return (
    <header className="shadow-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="text-xl font-bold">Atypical Pronunciation Detector</Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
      </nav>
    </div>
  </header>

  
  )
}


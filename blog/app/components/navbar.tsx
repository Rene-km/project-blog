'use client'

import * as React from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="shadow-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="text-xl font-bold">Atypical Pronunciation Detector</Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
      </nav>
    </div>
  </header>

  
  )
}


'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navigation = [
  {
    name: 'Share',
    href: '/share',
  },
  {
    name: 'Unseal',
    href: '/unseal',
  },

  {
    name: 'Deploy',
    href: '/deploy',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/chronark/envshare',
    external: true,
  },
] satisfies { name: string; href: string; external?: boolean }[]

export const Header: React.FC = () => {
  const pathname = usePathname()
  return (
    <header
      className="sticky top-0 z-40 transform"
      style={{ transform: 'translate3d(0,0,999px)' }}
    >
      <nav className="relative z-40 border-default border-b backdrop-blur-sm transition-opacity bg-muted/50">
        <div className="relative flex justify-between h-14 mx-auto lg:container lg:px-16 xl:px-20">
          <div className="flex grow items-center px-6 lg:px-0 sm:items-stretch justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="envshare"
                className="block whitespace-nowrap items-center text-xl font-medium font-mono transition focus:outline-none"
              >
                EnvShare
              </Link>
            </div>
            {/* Desktop navigation */}
            <div className="ml-[-0.60rem] lg:flex lg:items-center lg:justify-center">
              <ul className="flex flex-wrap items-center justify-end gap-6 grow">
                {navigation.map((item) => (
                  <li className="" key={item.href}>
                    <Link
                      className={`flex items-center duration-150 text-sm hover:text-primary
                    ${pathname === item.href ? 'text-foreground' : 'text-muted-foreground'}`}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

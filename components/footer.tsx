import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as React from 'react'
import { Icons } from './icons'

const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
})

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 text-muted-foreground">
          <Icons.logo className="h-10 w-10" />
          <p className="text-center text-sm leading-loose md:text-left">
            Maintained by{' '}
            <a
              href="https://twitter.com/mashafrancis"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Francis Masha
            </a>
            .
          </p>
          <br />
          <p>
            Project is a clone from{' '}
            <Link
              href="https://twitter.com/chronark_"
              className="font-semibold duration-150 hover:text-zinc-200"
            >
              @chronark_
            </Link>{' '}
            and is deployed on{' '}
            <Link
              target="_blank"
              href="https://vercel.com"
              className="underline duration-150 hover:text-zinc-200"
            >
              Vercel
            </Link>{' '}
            and uses{' '}
            <Link
              target="_blank"
              href="https://upstash.com"
              className="underline duration-150 hover:text-zinc-200"
            >
              Upstash
            </Link>{' '}
            for storing encrypted data.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}

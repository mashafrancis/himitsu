'use client'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

interface Props {
  url: string
  announcement: string
  badge?: string
  target?: '_self' | '_blank' | string
  className?: string
  hasArrow?: boolean
}

const AnnouncementBadge = ({
  url,
  announcement,
  badge,
  target = '_self',
  className,
  hasArrow = true,
}: Props) => (
  <div
    className={cn(
      'relative w-full max-w-xl flex justify-start opacity-0 !animate-[fadeIn_0.5s_cubic-bezier(0.25,0.25,0,1)_0.5s_both]',
      className,
    )}
  >
    <Link
      href={url}
      target={target}
      className={cn(
        `
          group/announcement
          relative
          flex flex-row
          items-center
          p-1 pr-3
          text-sm
          w-auto
          gap-2
          text-left
          rounded-full
          bg-primary/10
          text-primary
          border border-primary/10
          hover:border-primary/30
          overflow-hidden
          focus-visible:outline-none focus-visible:ring-primary/60 focus-visible:ring-2 focus-visible:rounded-full
          `,
        !badge && 'px-4',
      )}
    >
      {badge && (
        <Badge variant="default" className="py-1">
          {badge}
        </Badge>
      )}
      <span className="text-foreground">{announcement}</span>
      {hasArrow && (
        <ArrowRightIcon className="h-4 -translate-x-1 text-foreground transition-transform group-hover/announcement:translate-x-0" />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br
            opacity-70
            group-hover/announcement:opacity-100
            transition-opacity
            overflow-hidden rounded-full
            from-muted-background/10
            to-muted-background/30
            backdrop-blur-md
            "
      />
    </Link>
  </div>
)

export default AnnouncementBadge

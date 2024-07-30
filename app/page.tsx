import AnnouncementBadge from '@/components/announcement-badge'
import SectionContainer from '@/components/section-container'
import { Stats } from '@/components/stats'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const HomeHero = dynamic(() => import('@/components/home-hero'))

export default function Home() {
  return (
    <div className="w-full max-w-full relative mx-auto py-16 lg:py-24 bg-alternative overflow-hidden">
      <SectionContainer className="!py-0 grid grid-cols-12">
        <div className="relative grid z-10 col-span-12 gap-8 lg:col-span-5">
          <AnnouncementBadge
            url="https://github.com/mashafrancis/himitsu"
            announcement="EnvShare is now Open Source on GitHub."
          />
          <h1 className="h1 text-3xl md:!text-4xl lg:!text-4xl 2xl:!text-6xl tracking-[-.15px]">
            Share Environment Variables Securely
          </h1>
          <p className="p lg:text-lg text-muted-foreground max-w-lg lg:max-w-none">
            Your document is encrypted in your browser before being stored for a
            limited period of time and read operations. Unencrypted data never
            leaves your browser.
          </p>

          <div className="flex flex-row md:flex-row md:items-center gap-2 w-full">
            <Link
              href="/deploy"
              className={cn(
                buttonVariants({
                  size: 'lg',
                }),
                'w-full',
              )}
            >
              Deploy
            </Link>

            <Link
              href="/share"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                }),
                'w-full',
              )}
            >
              Share
            </Link>
          </div>
        </div>
        <div className="relative min-h-[300px] col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7">
          <HomeHero />
        </div>
        <Stats />
      </SectionContainer>
    </div>
  )
}

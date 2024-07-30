import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()
export const revalidate = 60

export const Stats = asyncComponent(async () => {
  const [reads, writes] = await redis
    .pipeline()
    .get('envshare:metrics:reads')
    .get('envshare:metrics:writes')
    .exec<[number, number]>()
  const stars = await fetch('https://api.github.com/repos/mashafrancis/himitsu')
    .then((res) => res.json())
    .then((json) => json.stargazers_count as number)

  const stats = [
    {
      label: 'Documents Encrypted',
      value: writes,
    },
    {
      label: 'Documents Decrypted',
      value: reads,
    },
  ] satisfies { label: string; value: number }[]

  if (stars) {
    stats.push({
      label: 'GitHub Stars',
      value: stars,
    })
  }

  return (
    <section className="relative z-10 mt-4 md:mt-8 lg:mt-20 xl:mt-32 col-span-12">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 xl:gap-32">
        {stats.map(({ label, value }) => (
          <li
            key={label}
            className="flex flex-col gap-2 px-4 py-3 overflow-hidden rounded m sm:flex-col"
          >
            <dd className="text-2xl sm:text-5xl font-bold text-muted-foreground opacity-50">
              {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                value,
              )}
            </dd>
            <dt className="text-muted-foreground text-base">{label}</dt>
          </li>
        ))}
      </ul>
    </section>
  )
})

// stupid hack to make "server components" actually work with components
// https://www.youtube.com/watch?v=h_9Vx6kio2s
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R
}

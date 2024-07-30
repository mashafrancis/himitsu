import './globals.css'
import { cn } from '@/lib/utils'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Header } from '../components/header'

import { Analytics } from '@/components/analytics'
import { Footer } from '@/components/footer'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-[100dvh] overscroll-none whitespace-pre-line font-sans !bg-alternative antialiased flex min-h-screen flex-col',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {
          // Not everyone will want to host envshare on Vercel, so it makes sense to make this opt-in.
          process.env.ENABLE_VERCEL_ANALYTICS ? <Analytics /> : null
        }
        <ThemeProvider attribute="class" defaultTheme={'light'} enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 overflow-hidden max-h-[900px]" />
        </ThemeProvider>
      </body>
    </html>
  )
}

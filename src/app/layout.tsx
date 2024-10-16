import { Titillium_Web } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './Provider'

const titilliumWeb = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin', 'latin-ext'],
});

export const metadata = {
  title: 'W Power – Online Pachtpreisrechner',
  description: 'Berechnen Sie Ihren Pachtpreis online mit FlächenMakler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={titilliumWeb.className}>
        <Providers >
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
              <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}



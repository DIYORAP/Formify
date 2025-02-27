import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import DesignerContextProvider from '@/components/context/DesignerContext'
import NextTopLoader from "nextjs-toploader";
import {
  ClerkProvider,
} from '@clerk/nextjs'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// export default function RootLayout({ children }: {  children: React.ReactNode }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={inter.className}>
//         <NextTopLoader />
//           <DesignerContextProvider>
//             <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//               {children}
//               <Toaster />
//             </ThemeProvider>
//           </DesignerContextProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
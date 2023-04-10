import './globals.css'

export const metadata = {
  title: 'Daily Progress Bar',
  description: 'See Daily Progress Bar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

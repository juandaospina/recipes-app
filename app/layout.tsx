import { montserrat } from 'app/app/ui/fonts'
import './globals.css'

interface RootProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootProps) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}


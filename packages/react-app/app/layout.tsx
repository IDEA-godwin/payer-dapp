import '@/styles/globals.css';

import { AppProvider } from '@/providers/AppProvider';
import Layout from '@/components/Layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className=''>
        <AppProvider>
          <Layout loading={false}>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}

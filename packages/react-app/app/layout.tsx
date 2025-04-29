import '@/styles/globals.css';

import { AppProvider } from '@/providers/AppProvider';
import Layout from '@/components/Layout';
import { GlobalProvider } from '@/contexts/GlobalContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className='bg-primary'>
        <AppProvider>
          <GlobalProvider>
            <Layout loading={false}>{children}</Layout>
          </GlobalProvider>
        </AppProvider>
      </body>
    </html>
  );
}

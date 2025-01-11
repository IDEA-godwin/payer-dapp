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
      <body>
        <AppProvider>
          <Layout loading={true}>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}

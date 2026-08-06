import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Usage Troubleshooting',
  description: 'Diagnose Claude usage issues',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui', backgroundColor: '#fff', color: '#000' }}>
        {children}
      </body>
    </html>
  );
}

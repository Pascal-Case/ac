import './globals.css';
import React from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={'navbar'}>
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div className={'content'}>{children}</div>
      </body>
    </html>
  );
}

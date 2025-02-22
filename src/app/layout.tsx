import { Inter, Poppins } from 'next/font/google';
import '@/styles/global.css';
import React from 'react';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: 'Jamin Stratford | Full-Stack Software Engineer',
    description: 'Jamin Stratford is a Full-Stack Software Engineer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className)}>{children}</body>
        </html>
    );
}

import Link from 'next/link';
import React from 'react';
import ContentContainer from '@/components/content-container';

const NavLink = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <li className="font-bold text-primary text-sm hover:text-indigo-400 transition-all">
            <Link href={href}>{children}</Link>
        </li>
    );
};

export const Nav = () => {
    return (
        <ContentContainer>
            <nav className="py-8">
                <ul className="flex-row flex w-full gap-4">
                    <li className="font-bold text-primary text-sm mr-auto">
                        <Link href="/">Jamin Stratford</Link>
                    </li>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                </ul>
            </nav>
        </ContentContainer>
    );
};

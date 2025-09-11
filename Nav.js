'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <nav>
            <ul className='holder'>
                <li><Link className={isActive('/') ? 'active' : ''} href="/">Home</Link></li>
                <li><Link className={isActive('/about') ? 'active' : ''} href="/about">About</Link></li>
                <li><Link className={isActive('/blog') ? 'active' : ''} href="/blog">Blog</Link></li>
                <li><Link className={isActive('/contact') ? 'active' : ''} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}




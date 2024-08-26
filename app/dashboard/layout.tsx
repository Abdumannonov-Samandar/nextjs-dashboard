'use client'
import { FileIcon, Globe, HomeIcon, UserCogIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navList: { id: number; label: string; href: string }[] = [
    { id: 1, label: 'Home', href: '/dashboard' },
    { id: 2, label: 'Invoices', href: '/dashboard/invoices' },
    { id: 3, label: 'Customers', href: '/dashboard/customers' },
]

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    const getIcon = (id: number) => {
        switch (id) {
            case 1:
                return <HomeIcon />
            case 2:
                return <FileIcon />
            case 3:
                return <UserCogIcon />
            default:
                return null
        }
    }

    return (
        <main className="grid grid-cols-[300px_1fr] px-3 py-5 gap-10">
            <section>
                <div className="h-[200px] bg-blue-600 text-6xl flex items-end justify-center rounded-md mb-3">
                    <div className="flex items-center mb-2">
                        <Globe className="text-white w-14 h-14" /> <h1 className="text-white font-medium font-serif">Acme</h1>
                    </div>
                </div>
                <ul className="flex flex-col gap-3">
                    {navList.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 py-3 px-4 rounded-md ${
                                    pathname === item.href
                                        ? 'bg-accent text-accent-foreground'
                                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}
                            >
                                {getIcon(item.id)}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                {children}
            </section>
        </main>
    )
}

export default Layout

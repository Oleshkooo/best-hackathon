import { navItems } from '@/app/layout'
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'

interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="py-3" />
            <div className="container flex gap-[40px] mb-auto">
                <aside className="flex flex-col w-[200px]">
                    <Nav items={navItems} />
                </aside>
                <main className="flex flex-1 flex-col w-full overflow-hidden">{children}</main>
            </div>
        </>
    )
}

export default Layout

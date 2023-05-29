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
            <div className="container mb-auto flex flex-col gap-[40px] sm:flex-row">
                <aside className="flex w-full flex-col sm:w-[200px]">
                    <Nav items={navItems} />
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
            </div>
        </>
    )
}

export default Layout

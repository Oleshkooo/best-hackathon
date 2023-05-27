interface DashboardHeaderProps {
    heading: string
    children?: React.ReactNode
}

const Header: React.FC<DashboardHeaderProps> = ({ heading, children }) => {
    return (
        <div className="flex items-center justify-between px-2">
            <div className="grid gap-1">
                <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
                {children != null && <p className="text-lg text-muted-foreground">{children}</p>}
            </div>
            
        </div>
    )
}

export default Header;
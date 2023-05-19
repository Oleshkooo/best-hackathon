declare module '*?inline' {
    const src: string
    export default src
}

type APIHandler = (req: NextRequest, res: NextResponse) => Promise<void | NextResponse | Response>

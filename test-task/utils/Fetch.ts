export const Fetch = async <T>(input: RequestInfo | URL, init?: RequestInit) => {
    const res = await fetch(input, init)

    if (!res.ok) throw new Error(res.statusText)

    return (await res.json()) as T
}

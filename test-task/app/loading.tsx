import { type NextPage } from 'next'

import s from './main.module.scss'

const Loading: NextPage = () => {
    return (
        <main className={s.Loading}>
            <span className={s.spinner} />
        </main>
    )
}

export default Loading

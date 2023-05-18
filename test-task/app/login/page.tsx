import Background from '@/public/img/BgLogin.svg'

import classes from './Login.module.scss'

const Login: React.FC = () => {
    return (
        <main className={classes.main}>
            <span className={classes.span} style={{ backgroundImage: `url(${Background.src})` }} />
            <section>
                <h2>Вхід в обліковий запис</h2>
                <form className={classes.form}>
                    <input
                        type={'text'}
                        name={'name'}
                        placeholder={"Ім'я користувача або E-mail"}
                        required
                    />
                    <input type={'password'} name={'password'} placeholder={'Пароль'} required />
                    <button type={'submit'}>Увійти</button>
                </form>
            </section>
        </main>
    )
}

export default Login

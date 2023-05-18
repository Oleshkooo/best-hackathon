import Background from '@/public/img/BgLogin.svg'

import classes from './Register.module.scss'

const Register: React.FC = () => {
    return (
        <main className={classes.main}>
            <span className={classes.span} style={{ backgroundImage: `url(${Background.src})` }} />
            <section>
                <h2>Реєстрація облікового запису</h2>
                <form className={classes.form}>
                    <input type={'text'} name={'name'} placeholder={"Ім'я користувача"} required />
                    <input type={'email'} name={'email'} placeholder={'E-mail'} required />
                    <input type={'password'} name={'password'} placeholder={'Пароль'} required />
                    <input
                        type={'password'}
                        name={'passwordRepeat'}
                        placeholder={'Підтвердження пароля'}
                        required
                    />
                    <button type={'submit'}>Зареєструватись</button>
                </form>
            </section>
        </main>
    )
}

export default Register

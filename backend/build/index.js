'use strict';

var path = require('path');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var compression = require('compression');
var cors = require('cors');
var express = require('express');
var helmet = require('helmet');
var client = require('@prisma/client');

// env
const DEFAULT_ENV_FILE = '.env';
const NODE_ENV = process.env.NODE_ENV ?? 'production';
dotenv.config({
    path: DEFAULT_ENV_FILE,
});
dotenv.config({
    path: `${DEFAULT_ENV_FILE}.${NODE_ENV}`,
});
// global
process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT ?? 4000;
// express
const CLIENT_DIR = path.join(__dirname, 'static', 'dist');
// export const CLIENT_PUBLIC_DIR = `${CLIENT_DIR}/public`
const WEBSITE_PATH = `${CLIENT_DIR}/index.html`;

const globalForPrisma = global;
const prisma = globalForPrisma.prisma ??
    new client.PrismaClient(isDevelopment
        ? {
            log: ['query'],
        }
        : undefined);
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma;

const post$1 = async (req, res) => {
    try {
        const { username, password } = req.body;
        // check if username is email
        const isEmail = username.includes('@');
        // find user by username or email
        const user = await prisma.user.findUnique({
            where: {
                [isEmail ? 'email' : 'username']: username,
            },
            include: {
                transactions: true,
            },
        });
        // check if user exists and password is correct
        if (user === null || user.password !== password) {
            return res.status(400).send({
                message: 'Неправильний логін або пароль',
            });
        }
        return res.status(200).send({
            message: 'Успішний вхід',
            data: user,
        });
    }
    catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        });
    }
    finally {
        res.end();
    }
};

const loginRouter = express.Router();
loginRouter.post('/', post$1);

const post = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // find user by email
        const emailExists = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        // find user by username
        const usernameExists = await prisma.user.findUnique({
            where: {
                username,
            },
            include: {
                transactions: true,
            },
        });
        // chcek if email or username already exists
        if (emailExists !== null || usernameExists !== null) {
            return res.status(400).send({
                message: 'E-mail або логін вже зайнятий',
            });
        }
        // create new user
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        });
        const returnUser = {
            ...user,
            transactions: [],
        };
        res.status(200).send({
            message: 'Реєстрація успішна',
            data: returnUser,
        });
    }
    catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        });
    }
    finally {
        res.end();
    }
};

const registerRouter = express.Router();
registerRouter.post('/', post);

const get = async (req, res) => {
    try {
        const { id } = req.body;
        // check if id is valid
        if (id == null || id === '') {
            return res.status(400).send({
                message: 'Неправильний ID',
            });
        }
        // find user by id
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                transactions: true,
            },
        });
        // check if user exists
        if (user === null) {
            return res.status(400).send({
                message: 'Користувача не знайдено',
            });
        }
        return res.status(200).send({
            message: 'Користувача знайдено',
            data: user,
        });
    }
    catch (error) {
        return res.status(500).send({
            message: 'Помилка сервера',
        });
    }
    finally {
        res.end();
    }
};

const userRouter = express.Router();
userRouter.get('/', get);

const apiRouter = express.Router();
apiRouter.use('/login', loginRouter);
apiRouter.use('/register', registerRouter);
apiRouter.use('/user', userRouter);

const server = express();
try {
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(compression());
    server.use(cors());
    server.use(helmet({
        contentSecurityPolicy: false,
    }));
    server.use(express.static(CLIENT_DIR));
    // server.use(express.static(CLIENT_PUBLIC_DIR))
    server.use('/api', apiRouter);
    server.get('*', (req, res) => {
        res.sendFile(WEBSITE_PATH);
    });
    console.log('[SERVER] Initialized');
}
catch (error) {
    console.error(error);
}
//

const start = async () => {
    server.listen(PORT, () => {
        console.log(`[SERVER] Listening on port ${PORT}`);
    });
};
start().catch(error => {
    console.error(error);
});

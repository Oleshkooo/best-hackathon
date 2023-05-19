'use strict';

var path = require('path');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var compression = require('compression');
var cors = require('cors');
var express = require('express');
var helmet = require('helmet');

const DEFAULT_ENV_FILE = '.env';
const NODE_ENV = process.env.NODE_ENV ?? 'production';
dotenv.config({
    path: DEFAULT_ENV_FILE,
});
dotenv.config({
    path: `${DEFAULT_ENV_FILE}.${NODE_ENV}`,
});
// global
const PORT = process.env.PORT ?? 4000;
const CLIENT_DIR = path.join(__dirname, 'static', 'client');
const CLIENT_PUBLIC_DIR = `${CLIENT_DIR}/public`;
const WEBSITE_PATH = `${CLIENT_DIR}/index.html`;

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
    server.use(express.static(CLIENT_PUBLIC_DIR));
    server.get('*', (req, res) => {
        res.sendFile(WEBSITE_PATH);
    });
    console.log('[SERVER] Initialized');
}
catch (error) {
    console.error(error);
}

const start = async () => {
    server.listen(PORT, () => {
        console.log(`[SERVER] Listening on port ${PORT}`);
    });
};
start().catch(error => {
    console.error(error);
});

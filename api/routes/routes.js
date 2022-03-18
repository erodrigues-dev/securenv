const AuthController = require('../controllers/auth-controller');
const SyncController = require('../controllers/sync-controller');

const auth = new AuthController();
const sync = new SyncController();

module.exports = (express) => {
    const router = express.Router();
    router.post('/auth', [], auth.login.bind(auth));
    router.post('/sync', [], sync.set.bind(sync));
    router.get('/sync/:project/:environment', [], sync.get.bind(sync));
    return router;
}
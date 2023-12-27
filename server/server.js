import auth, { rewriter } from "json-server-auth";
import { create, router as _router, defaults } from "json-server";

const server = create();
const router = _router("db.json");
const middlewares = defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);

const rules = rewriter({
    users: 640,
    conversations: 660,
    messages: 660,
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);

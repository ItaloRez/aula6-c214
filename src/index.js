import app from "./app.js";
import db from "./database/index.js";

db.connect();
app.listen(4000);

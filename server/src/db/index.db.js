import pkg from "pg";

const { Pool } = pkg;

import { db_config } from "../configs/database.config.js";

const db = new Pool(db_config);

export const query = async (query, params) => {
    if (params) {
        return await db.query(query, params);
    }

    return await db.query(query);
};

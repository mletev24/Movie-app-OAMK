import { pool } from "../helpers/db.js"


const insertUser = async (email, hashedPassword, createdAt) => {
    return await pool.query('insert into account (email,password,createdAt) values ($1,$2,$3) returning *', [email, hashedPassword,createdAt])
}

const selectUserByEmail = async (email) => {
    return await pool.query('select * from account where email=$1', [email])
}

export { insertUser, selectUserByEmail }
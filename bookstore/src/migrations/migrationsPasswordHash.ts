import pool from "../config/database";


const sql = `ALTER TABLE users ADD COLUMN passwordhash\ VARCHAR(100);`;
pool
  .query(sql)
  .then((result) => {
    console.log("Password column added to users table:", result);
  })
  .catch((error) => {
    console.error("Error adding password column:", error);
  });
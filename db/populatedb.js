#! /usr/bin/env node

const { Client } = require("pg");

require("dotenv").config();

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username varchar (255),
    added TIMESTAMP
  );

  INSERT INTO messages (text, username, added)
  VALUES 
    ('Hello', 'anonymous1', '2024-01-01 00:00:00'),
    ('Hi', 'anonymous2', '2024-01-01 00:01:37'),
    ('Yo', 'anonymous3', '2024-01-01 00:02:05');
    ('?', 'anonymous4', '2024-01-02 12:23:54');
`;

const SQL2 = `
  INSERT INTO messages (text, username, added)
  VALUES 
    
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

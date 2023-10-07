import { Connection, createConnection } from 'mysql2/promise'

export async function connectUsersDB (): Promise<Connection> {
  const connection: Connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_users'
  })
  connection.on('error', function (error: Error) {
    if (error != null) throw error
  })
  return connection
}

export async function connectsCouplesStatesDB (): Promise<Connection> {
  const connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_couples_states'
  })
  connection.on('error', function (error: Error) {
    if (error != null) throw error
  })
  return connection
}

/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Connection } from 'mysql2/promise'
import { connectUsersDB } from '../database'
import { User } from '../types'

const DATABASE: string = 'user'

export class UsersModel {
  static async create (newUser: User): Promise<void> {
    const db: Connection = await connectUsersDB()
    await db.query('INSERT INTO ?? SET ?', [DATABASE, newUser])
  }

  static async getAll (): Promise<any> {
    const db: Connection = await connectUsersDB()
    return await db.query('SELECT * FROM ??', [DATABASE])
  }

  static async getById (userId: string): Promise<any> {
    const db: Connection = await connectUsersDB()
    await db.query('SELECT * FROM ?? WHERE userId = ?', [DATABASE, userId])
  }

  static async update (userId: string, userUpdated: User): Promise<void> {
    const db: Connection = await connectUsersDB()
    await db.query('UPDATE ?? SET ? WHERE userId = ?', [DATABASE, userUpdated, userId])
  }

  static async delete (userId: string): Promise<void> {
    const db: Connection = await connectUsersDB()
    await db.query('DELETE FROM ?? WHERE userId = ?', [DATABASE, userId])
  }
}

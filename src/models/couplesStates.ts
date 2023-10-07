/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Connection } from 'mysql2/promise'
import { connectsCouplesStatesDB } from '../database'
import { CoupleState } from '../types'

const DATABASE: string = 'couplestate'

export class CouplesStatesModel {
  static async create (coupleState: CoupleState): Promise<void> {
    const db: Connection = await connectsCouplesStatesDB()
    await db.query('INSERT INTO ?? SET ?', [DATABASE, coupleState])
  }

  static async getAll (): Promise<any> {
    const db: Connection = await connectsCouplesStatesDB()
    return await db.query('SELECT * FROM ??', [DATABASE])
  }

  static async getByUserId (userId: string): Promise<any> {
    const db: Connection = await connectsCouplesStatesDB()
    return await db.query('SELECT * FROM ?? WHERE senderId = ?', [DATABASE, userId])
  }

  static async getByUserIdAndDate (userId: string, date: string): Promise<any> {
    const db: Connection = await connectsCouplesStatesDB()
    return await db.query('SELECT * FROM ?? WHERE senderId = ? AND date = ?', [DATABASE, userId, date])
  }

  static async getByUserIdBetweenDates (userId: string, firstDate: any, lastDate: any): Promise<any> {
    const db: Connection = await connectsCouplesStatesDB()
    return await db.query('SELECT * FROM ?? WHERE senderId = ? AND date BETWEEN ? AND ?', [DATABASE, userId, firstDate, lastDate])
  }
}

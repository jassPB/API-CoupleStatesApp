/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Request, Response } from 'express'
import { CoupleState } from '../types'
import { existDataOnArray, toNewCoupleState } from '../utils'
import { CouplesStatesModel } from '../models/couplesStates'

export class CouplesStatesController {
  static async add (req: Request, res: Response): Promise<void> {
    try {
      const newCoupleState: CoupleState = toNewCoupleState(req.body)
      await CouplesStatesModel.create(newCoupleState)
      res.json('Couple state added')
    } catch (error: any) {
      if (error instanceof TypeError) {
        res.status(409).json(error.message)
      } else {
        res.status(409).json('Cannot add this couple state')
      }
      console.log(error.message)
    }
  }

  static async getAll (_req: Request, res: Response): Promise<void> {
    try {
      const couplesStates: CoupleState[] = await CouplesStatesModel.getAll() as CoupleState[]
      if (existDataOnArray(couplesStates)) {
        res.json(couplesStates[0])
      } else {
        res.status(404).json('Not couples states to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get couples states')
      console.log(error.message)
    }
  }

  static async getByUserId (req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params
      const couplesStates: CoupleState[] = await CouplesStatesModel.getByUserId(userId) as CoupleState[]
      if (existDataOnArray(couplesStates)) {
        res.json(couplesStates[0])
      } else {
        res.status(404).json('Not couples states to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get couples states')
      console.log(error.message)
    }
  }

  static async getByUserIdAndDate (req: Request, res: Response): Promise<void> {
    try {
      const { userId, date } = req.params
      const couplesStates: CoupleState[] = await CouplesStatesModel.getByUserIdAndDate(userId, date) as CoupleState[]
      if (existDataOnArray(couplesStates)) {
        res.json(couplesStates[0])
      } else {
        res.status(404).json('Not couples states to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get couples states')
      console.log(error.message)
    }
  }

  static async getByUserIdBetweenDates (req: Request, res: Response): Promise<void> {
    try {
      const { userId, firstDate, lastDate } = req.params
      console.log(firstDate)
      const couplesStates: CoupleState[] = await CouplesStatesModel.getByUserIdBetweenDates(userId, firstDate, lastDate) as CoupleState[]
      if (existDataOnArray(couplesStates)) {
        res.json(couplesStates[0])
      } else {
        res.status(404).json('Not couples states to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get couples states')
      console.log(error.message)
    }
  }
}

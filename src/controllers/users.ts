/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Request, Response } from 'express'
import { UsersModel } from '../models/users'
import { User } from '../types'
import { toNewUser, existDataOnArray } from '../utils'

export class UsersController {
  static async add (req: Request, res: Response): Promise<void> {
    try {
      const newUser: User = toNewUser(req.body)
      await UsersModel.create(newUser)
      res.json('User added')
    } catch (error: any) {
      if (error instanceof TypeError) {
        res.status(409).json(error.message)
      } else {
        res.status(409).json('Cannot add this User')
      }
      console.log(error.message)
    }
  }

  static async getAll (_req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await UsersModel.getAll() as User[]
      if (existDataOnArray(users)) {
        res.json(users[0])
      } else {
        res.status(404).json('No users found to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get Users')
      console.log(error.message)
    }
  }

  static async getById (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const user: User[] = await UsersModel.getById(id) as User[]
      if (existDataOnArray(user)) {
        res.json(user[0])
      } else {
        res.status(404).json('No users found to show')
      }
    } catch (error: any) {
      res.status(404).json('Cannot get this User')
      console.log(error.message)
    }
  }

  static async update (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const user: User[] = await UsersModel.getById(id) as User[]
      if (existDataOnArray(user)) {
        if (req.body.coupleId != null) {
          const couple: User[] = await UsersModel.getById(req.body.coupleId) as User[]
          if (existDataOnArray(couple)) {
            const newUser: User = toNewUser(req.body)
            await UsersModel.update(id, newUser)
            res.json('User updated')
          } else {
            throw new Error('Unregistered couple')
          }
        } else {
          const newUser: User = toNewUser(req.body)
          await UsersModel.update(id, newUser)
          res.json('User updated')
        }
      }
    } catch (error: any) {
      if (error instanceof TypeError) {
        res.status(409).json(error.message)
      } else {
        res.status(409).json('Cannot update this User')
      }
      console.log(error.message)
    }
  }

  static async delete (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      await UsersModel.delete(id)
      res.json('User deleted')
    } catch (error: any) {
      res.status(409).json('Cannot delete this User')
      console.log(error.message)
    }
  }
}

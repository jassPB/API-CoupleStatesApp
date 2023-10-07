/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { UsersController } from '../controllers/users'

export const usersRouter = Router()

usersRouter.route('/')
  .get(UsersController.getAll)
  .post(UsersController.add)
usersRouter.route('/:id')
  .get(UsersController.getById)
  .put(UsersController.update)
  .delete(UsersController.delete)

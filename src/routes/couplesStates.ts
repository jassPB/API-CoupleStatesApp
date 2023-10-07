/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { CouplesStatesController } from '../controllers/couplesStates'

export const couplesStatesRouter = Router()

couplesStatesRouter.route('/')
  .get(CouplesStatesController.getAll)
  .post(CouplesStatesController.add)
couplesStatesRouter.route('/:userId')
  .get(CouplesStatesController.getByUserId)
couplesStatesRouter.route('/:userId/:date')
  .get(CouplesStatesController.getByUserIdAndDate)
couplesStatesRouter.route('/:userId/:firstDate/:lastDate')
  .get(CouplesStatesController.getByUserIdBetweenDates)

import express, { Application } from 'express'
import morgan from 'morgan'
import { usersRouter } from './routes/users'
import { couplesStatesRouter } from './routes/couplesStates'

export class App {
  private readonly app: Application

  constructor (private readonly port?: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.use(express.json())
    this.app.set('port', (this.port ?? process.env.PORT ?? 3000))
    return undefined
  }

  middlewares (): void {
    this.app.use(morgan('dev'))
  }

  routes (): void {
    this.app.use('/users', usersRouter)
    this.app.use('/couples-states', couplesStatesRouter)
  }

  async listen (): Promise<void> {
    await this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}

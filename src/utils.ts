import { CoupleState, User } from './types'

const isString = (value: any): boolean => {
  return typeof value === 'string' || value instanceof String
}

const isDate = (value: string): boolean => {
  return Boolean(Date.parse(value))
}

const parseCoupeId = (value: any): any => {
  if (value == null) {
    return null
  }
  if (isString(value)) {
    return value
  }
  throw new TypeError('Incorrect type of element')
}

const parseString = (value: any): string => {
  if (isString(value)) {
    return value
  }
  throw new TypeError('Incorrect or missing element')
}

const parseDate = (value: any): string => {
  if (isString(value) && isDate(value)) {
    return value
  }
  throw new TypeError('Incorrect or missing element')
}

export const toNewUser = (object: any): User => {
  const newUser: User = {
    userId: parseString(object.userId),
    correo: parseString(object.correo),
    password: parseString(object.password),
    coupleId: parseCoupeId(object.coupleId)
  }
  return newUser
}

export const existDataOnArray = (array: User[] | CoupleState[]): boolean => {
  if (Object.keys(array[0]).length !== 0) {
    return true
  }
  return false
}

export const toNewCoupleState = (object: any): CoupleState => {
  const newCoupleState = {
    id: parseString(object.id),
    senderId: parseString(object.senderId),
    receiverId: parseString(object.receiverId),
    type: parseString(object.type),
    feel: parseString(object.feel),
    emotions: parseString(object.emotions),
    generalComment: parseString(object.generalComment),
    coupleComment: parseString(object.coupleComment),
    date: parseDate(object.date)
  }
  return newCoupleState
}

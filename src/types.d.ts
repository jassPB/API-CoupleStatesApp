export interface User {
  userId: string
  correo: string
  password: string
  coupleId: string
}

export interface CoupleState {
  id: string
  senderId: string
  receiverId: string
  type: string
  emotions: string
  generalComment: string
  coupleComment: string
  date: string
}

import { Status } from '../types/entityType'
import Role from './Role'
// import Customer from './Customer'
// import Staff from './Staff'

export default class User {
  id!: string

  createAt!: Date

  updateAt!: Date

  nickname!: string

  password!: string

  avatar: string | undefined

  status!: Status

  roleList!: Role[]

  // customer!: Customer

  // staff!: Staff
}

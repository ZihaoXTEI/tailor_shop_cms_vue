import { Status } from '../types/entityType'
import Permission from './Permission'
import User from './User'

export default class Role {
  id!: number

  roleName!: string

  roleRemark: string | undefined

  status!: Status

  createAt!: Date

  updateAt!: Date

  userList!: User[]

  permissionList!: Permission[]
}

import { Status } from '../types/entityType'

import Menu from './Menu'
import Role from './Role'

export default class Permission {
  id!: number

  permissionName!: string

  permissionDescribe: string | undefined

  permissionRemark: string | undefined

  parentId!: number

  parentPermission!: Permission

  childPermissionList!: Permission[]

  status!: Status

  menuId!: number

  menu: Menu | undefined

  createAt!: Date

  updateAt!: Date

  roleList!: Role[]
}

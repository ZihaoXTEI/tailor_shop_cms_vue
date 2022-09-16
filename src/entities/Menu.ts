import { Status, ClientType } from '../types/entityType'

import Permission from './Permission'

export default class Menu {
  id!: number

  menuName!: string

  url!: string

  style: string | undefined

  menuType!: ClientType

  menuLevel!: number

  sort!: number

  status!: Status

  createAt!: Date

  updateAt!: Date

  permissionList!: Permission[]

  parentId!: number

  parentMenu: Menu | undefined

  childMenuList!: Menu[]
}

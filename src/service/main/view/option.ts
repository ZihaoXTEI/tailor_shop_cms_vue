import myRequest from '../../index'
import { IDataType } from '../../type'

import { OptionAPI } from '../../../constants/requestApi'
import type { MenuOptionList, OptionList } from './type'

// 获取服装类型选项
export function getClothTypeOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.ClothType,
  })
}

// 获取布料类型选项
export function getFabricTypeOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.FabricType,
  })
}

// 获取布料选项
export function getFabricOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Fabric,
  })
}

// 获取供应商选项
export function getSupplierOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Supplier,
  })
}

// 获取职员选项
export function getStaffOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Staff,
  })
}

// 获取顾客选项
export function getCustomerOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Customer,
  })
}

// 获取菜单选项
export function getMenuOption() {
  return myRequest.get<IDataType<MenuOptionList>>({
    url: OptionAPI.Menu,
  })
}

// 获取角色选项
export function getRoleOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Role,
  })
}

// 获取权限选项
export function getPermissionOption() {
  return myRequest.get<IDataType<OptionList>>({
    url: OptionAPI.Permission,
  })
}

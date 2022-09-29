import myRequest from '../index'

import type { IDataType } from '../type'

// 获取页面数据
export function getDataList(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  })
}

// 根据 ID 获取数据
export function getDataById(url: string, id: string | number) {
  return myRequest.get<IDataType>({
    url: `${url}/${id}`,
  })
}

// 创建数据
export function createData(url: string, newData: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: newData,
  })
}

// 修改数据
export function updateData(url: string, id: string | number, editData: any) {
  console.log(editData)
  return myRequest.put<IDataType>({
    url: url + id,
    data: editData,
  })
}

// 删除数据:  /users/id
export function deleteData(url: string, id: any) {
  return myRequest.delete<IDataType>({
    url: url + id,
  })
}

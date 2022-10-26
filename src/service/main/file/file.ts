import myRequest from '../../index'
import { IDataType } from '../../type'

import { FileAPI } from '../../../constants/requestApi'

// 删除布料图片
export function deleteFabricImage(fabricId: string, fileName: any) {
  return myRequest.delete<IDataType>({
    url: `${FileAPI.DeleteFabricImage}${fileName}`,
    params: {
      fabricId,
    },
  })
}

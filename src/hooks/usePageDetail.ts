import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageDetail from '../components/page-modal'
import { getDataById } from '../service/main/main'

type CallbackFn = (item?: any) => void

export function usePageDetail(
  requestUrl: string,
  createCallback?: CallbackFn,
  editCallback?: CallbackFn,
): any {
  const isShowDetailPanel = ref<boolean>(false)

  // 初始化表单数据
  const detailFormValue = ref({})
  const otherFormValue = ref({})

  // 创建数据触发事件
  const handleCreateData = () => {
    detailFormValue.value = {}
    createCallback && createCallback()

    // 显示详细面板
    isShowDetailPanel.value = true
  }

  // 编辑数据触发事件
  const handleDetailData = async (id: string | number) => {
    // 显示详细面板
    isShowDetailPanel.value = true

    console.log('--')

    const result = await getDataById(requestUrl, id)

    console.log(result)

    detailFormValue.value = result.data

    editCallback && editCallback()
  }

  const handleCancel = () => {
    isShowDetailPanel.value = false
    otherFormValue.value = {}
  }

  return {
    isShowDetailPanel,
    detailFormValue,
    otherFormValue,
    handleCreateData,
    handleDetailData,
    handleCancel,
  }
}

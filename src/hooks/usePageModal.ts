import { ref } from 'vue'
import PageModal from '../components/page-modal'
import { getDataById } from '../service/main/main'

type CallbackFn = (item?: any) => void

export function usePageModal(
  requestUrl: string,
  createCallback?: CallbackFn,
  editCallback?: CallbackFn,
): any {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  // 初始化表单数据
  const modalFormValue = ref({})

  // 创建数据触发事件
  const handleCreateData = () => {
    modalFormValue.value = {}
    if (pageModalRef.value) {
      // 让对话框显示
      pageModalRef.value.visible = true
    }
    createCallback && createCallback()
  }

  // 编辑数据触发事件
  const handleEditData = async (id: string | number) => {
    const result = await getDataById(requestUrl, id)

    modalFormValue.value = result.data

    if (pageModalRef.value) {
      // 让对话框显示
      pageModalRef.value.visible = true
    }
    editCallback && editCallback()
  }

  return [pageModalRef, modalFormValue, handleCreateData, handleEditData]
}

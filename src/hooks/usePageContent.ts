import { ref } from 'vue'

import PageSearch from '../components/page-search'

export function usePageContent(): any {
  const pageSearchRef = ref<InstanceType<typeof PageSearch>>()

  // 刷新按钮触发事件
  const handleResetForm = () => {
    if (pageSearchRef.value) {
      // 重置高级检索的表单内容
      pageSearchRef.value?.resetFields()
    }
  }

  return [pageSearchRef, handleResetForm]
}

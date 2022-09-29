import { ref } from 'vue'

import PageContent from '../components/page-content'
import PageSearch from '../components/page-search'

export function usePage(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const pageSearchRef = ref<InstanceType<typeof PageSearch>>()

  // 刷新按钮触发事件
  const handleRefreshData = () => {
    if (pageSearchRef.value) {
      // 重置高级检索的表单内容
      pageSearchRef.value?.resetFields()
    }

    if (pageContentRef.value) {
      // 重新获取列表数据
      pageContentRef.value?.getPageData()
    }
  }

  // 重置表单触发事件
  const handleResetData = () => {
    if (pageContentRef.value) {
      // 重新获取列表数据
      pageContentRef.value?.getPageData()
    }
  }

  // 搜索按钮触发事件
  const handleQueryData = (queryInfo: any) => {
    console.log(queryInfo)
    if (pageContentRef.value) {
      // 根据表单内容重新获取列表数据
      pageContentRef.value?.getPageData(queryInfo)
    }
  }

  return [
    pageContentRef,
    pageSearchRef,
    handleResetData,
    handleQueryData,
    handleRefreshData,
  ]
}

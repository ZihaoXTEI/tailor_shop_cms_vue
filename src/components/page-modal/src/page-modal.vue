<template>
  <div class="page-modal">
    <a-modal
      v-model:visible="visible"
      :title="modalTitle"
      :confirm-loading="confirmLoading"
      :destroy-on-close="true"
      :mask-closable="false"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <my-form
        v-bind="modalFormConfig"
        v-model="formData"
        :validate-infos="validateInfos"
      >
      </my-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  PropType,
  reactive,
  ref,
  watch,
} from 'vue'
import { Form } from 'ant-design-vue'

import { IForm } from '../../../base-ui/my-form'
import { createData, updateData } from '../../../service/main/main'

const useForm = Form.useForm

export default defineComponent({
  name: 'PageModal',
  props: {
    pageName: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    requestUrl: {
      type: String,
      required: true,
    },
    modalFormConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
    modalFormValue: {
      type: Object,
      required: true,
    },
  },
  emits: ['refreshData'],
  setup(props, { emit }) {
    const visible = ref<boolean>(false) // 控制对话框显示与隐藏
    const confirmLoading = ref<boolean>(false) // 确认按钮的状态
    const modalTitle = ref<string>(props.pageTitle + '操作') // 对话框标题

    const formData = ref<any>({}) // 表单数据

    onBeforeMount(() => {
      initFormData()
    })

    onBeforeUpdate(() => {
      resetFields()
    })

    // 初始化表单数据
    const initFormData = () => {
      // | 'select'
      // | 'checkbox'
      // | 'switch'
      console.log('initFormData')
      for (const item of props.modalFormConfig.formItems) {
        if (item.type === 'inputnumber') {
          formData.value[`${item.field}`] = 0
        } else if (item.type === 'rangepicker' || item.type === 'inputrange') {
          formData.value[`${item.field}`] = []
        } else if (item.type === 'switch') {
          formData.value[`${item.field}`] = false
        } else {
          formData.value[`${item.field}`] = ''
        }
      }

      resetFields()
    }

    watch(
      () => props.modalFormValue,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          if (item.type === 'password') continue
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      },
    )

    // 表单验证规则
    const formRules = reactive(props.modalFormConfig?.formRules ?? {})

    const { resetFields, validate, validateInfos } = useForm(
      formData,
      formRules,
    )

    // 确认按钮点击事件
    const handleOk = () => {
      confirmLoading.value = true
      // 合并 formData 数据
      // formData.value = {
      //   ...toRaw(formData.value),
      //   // ...toRaw(props.modalFormValue),
      // }
      console.log(formData.value)

      validate()
        .then(async () => {
          console.log(formData.value)

          if (Object.keys(props.modalFormValue).length) {
            // 修改数据
            const id = props.modalFormValue?.id
            const result = await updateData(
              props.requestUrl,
              id,
              formData.value,
            )

            console.log(result)
          } else {
            // 创建数据
            const result = await createData(props.requestUrl, formData.value)
            console.log(result)
          }

          emit('refreshData')

          setTimeout(() => {
            resetFields()
            initFormData()

            visible.value = false
            confirmLoading.value = false
          }, 1000)
        })
        .catch((err) => {
          console.log(err)
          // resetFields()
          // initFormData()

          confirmLoading.value = false
        })
    }

    // 取消按钮点击事件
    const handleCancel = () => {
      resetFields()
      formData.value = {}
    }

    return {
      visible,
      confirmLoading,
      formData,
      modalTitle,

      validateInfos,

      handleOk,
      handleCancel,
    }
  },
})
</script>

<style lang="less" scoped></style>

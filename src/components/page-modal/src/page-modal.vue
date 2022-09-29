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
import { defineComponent, PropType, ref, watch } from 'vue'
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

    watch(
      () => props.modalFormValue,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          if (item.field === 'password') continue
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      },
    )

    // 表单验证规则
    const formRules = ref(props.modalFormConfig?.formRules ?? {})

    const { resetFields, validate, validateInfos } = useForm(
      formData,
      formRules,
      {
        onValidate: (...args) => console.log(...args),
      },
    )

    // 确认按钮点击事件
    const handleOk = () => {
      confirmLoading.value = true
      validate()
        .then(async () => {
          console.log(formData.value)

          if (Object.keys(props.modalFormValue).length) {
            // 修改数据
            const id = props.modalFormValue?.id
            const result = await updateData(props.requestUrl, id, {
              ...formData.value,
              // ...props.modalFormValue,
            })

            console.log(result)
          } else {
            // 创建数据
            const result = await createData(props.requestUrl, formData.value)
            console.log(result)
          }

          emit('refreshData')

          setTimeout(() => {
            resetFields()
            formData.value = {}
            visible.value = false
            confirmLoading.value = false
          }, 1000)
        })
        .catch((err) => {
          console.log(err)
          resetFields()
          formData.value = {}
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

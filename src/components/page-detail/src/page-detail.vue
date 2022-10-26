<template>
  <div class="page-detail">
    <my-card :card-title="pageTitle + '详情'">
      <my-form
        v-bind="detailFormConfig"
        v-model="formData"
        :validate-infos="validateInfos"
      >
        <template
          v-for="item in slotName"
          :key="item.field"
          #[item.field]="{ value }"
        >
          <slot :name="item.field" :value="value"></slot>
        </template>
      </my-form>

      <a-divider />

      <div class="operation-bar">
        <a-space>
          <a-button @click="handleCancel">取消</a-button>

          <a-button type="primary" @click.prevent="handleSave">保存</a-button>
        </a-space>
      </div>
    </my-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  watch,
  createVNode,
  toRaw,
  reactive,
  onBeforeMount,
} from 'vue'
import { Form, Modal, message } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
// import 'ant-design-vue/es/message/style/css'
// import 'ant-design-vue/es/modal/style/css'

import { IForm } from '../../../base-ui/my-form'
import { createData, updateData } from '../../../service/main/main'

const useForm = Form.useForm

export default defineComponent({
  name: 'PageDetail',
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
    detailFormConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
    detailFormValue: {
      type: Object,
      required: true,
    },
    /**
     * slot插槽 传送的数据
     */
    otherFormValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['refreshData', 'cancel'],
  setup(props, { emit }) {
    const formData = ref<any>({}) // 表单数据

    onBeforeMount(() => {
      initFormData()
    })

    // 初始化表单数据
    const initFormData = () => {
      // | 'select'
      // | 'datepicker'
      // | 'radio'
      // | 'checkbox'
      // | 'switch'
      for (const item of props.detailFormConfig.formItems) {
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

    // 根据原有的值更新 formData的值
    watch(
      () => props.detailFormValue,
      (newValue) => {
        console.log('newValue', newValue)
        for (const item of props.detailFormConfig.formItems) {
          if (item.type === 'password') continue
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      },
    )

    // 筛选出需要插槽的 field
    const slotName = props.detailFormConfig.formItems.filter(
      (item) => item.type === 'custom',
    )

    // 表单验证规则
    const formRules = reactive(props.detailFormConfig?.formRules ?? {})

    const { resetFields, validate, validateInfos } = useForm(
      formData,
      formRules,
    )

    // 保存按钮事件
    const handleSave = () => {
      // 合并 formData 数据
      formData.value = {
        ...toRaw(formData.value),
        ...toRaw(props.otherFormValue),
      }
      console.log(formData.value)

      validate()
        .then(async () => {
          console.log('RES', formData.value)

          if (Object.keys(props.detailFormValue).length) {
            // 修改数据
            const id = props.detailFormValue?.id
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
          resetFields()
          initFormData()

          emit('refreshData')
          emit('cancel')
        })
        .catch((err) => {
          console.log(err)
          // resetFields()
          // initFormData()
        })
    }

    // 取消按钮触发事件
    const handleCancel = () => {
      Modal.confirm({
        title: '是否取消更改？',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, '数据将不会保存'),
        onOk() {
          console.log('OK')
          resetFields()
          initFormData()

          emit('cancel')
        },
        onCancel() {
          console.log('Cancel')
        },
      })
    }
    return {
      formData,
      validateInfos,
      slotName,

      handleSave,
      handleCancel,
    }
  },
})
</script>

<style lang="less" scoped>
.page-detail {
  .operation-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    // > button {
    //   margin-left: 10px;
    // }
  }
}
</style>

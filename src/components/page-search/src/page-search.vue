<template>
  <div class="page-search">
    <my-card card-title="高级检索">
      <my-form
        v-bind="searchFormConfig"
        v-model="formData"
        :validate-infos="validateInfos"
      >
        <template #footer>
          <a-divider />

          <a-row justify="end" :gutter="[8, 0]">
            <a-col>
              <a-button
                type="primary"
                danger
                ghost
                @click="handleResetBtnClick"
              >
                重置
              </a-button>
            </a-col>
            <a-col>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  @click="handleQueryBtnClick"
                >
                  搜索
                </a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </template>
      </my-form>
    </my-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Form } from 'ant-design-vue'

import { IForm, IFormItem } from '../../../base-ui/my-form'
import dayjs from 'dayjs'

const useForm = Form.useForm

export default defineComponent({
  name: 'PageSearch',
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
  },
  emits: ['resetData', 'queryData'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    // 保存表单原始数据（表单置空时候使用）
    const formOriginData: any = {}
    formItems.forEach((item: IFormItem) => {
      if (['inputnumber'].includes(item.type)) {
        formOriginData[item.field] = 0
      } else if (['rangepicker', 'inputrange'].includes(item.type)) {
        formOriginData[item.field] = []
      } else {
        formOriginData[item.field] = ''
      }
    })
    // 表单数据
    const formData = ref(formOriginData)

    // 表单验证规则
    const formRules = ref(props.searchFormConfig?.formRules ?? {})

    const { resetFields, validate, validateInfos } = useForm(
      formData,
      formRules,
      {
        onValidate: (...args) => console.log(...args),
      },
    )

    // 重置按钮点击事件
    const handleResetBtnClick = () => {
      resetFields()
      // formData.value = formOriginData
      emit('resetData')
    }

    // 查询按钮点击事件
    const handleQueryBtnClick = () => {
      validate()
        .then(() => {
          console.log(formData.value)
          emit('queryData', formData.value)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return {
      formData,

      validateInfos,

      resetFields,

      handleResetBtnClick,
      handleQueryBtnClick,
    }
  },
})
</script>

<style lang="less" scoped></style>

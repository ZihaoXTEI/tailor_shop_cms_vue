<template>
  <div class="my-form">
    <!-- :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" -->
    <a-form ref="formRef" autocomplete="off">
      <a-row :gutter="[16, 8]" v-bind="rowLayout">
        <template v-for="item in formItems" :key="item.field">
          <a-col v-bind="colLayout">
            <a-form-item
              :label="item.label"
              :name="item.field"
              v-bind="validateInfos[`${item.field}`]"
            >
              <!-- 文本框 -->
              <template v-if="item.type === 'input'">
                <a-input
                  :value="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  allow-clear
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                >
                </a-input>
              </template>

              <!-- 密码框 -->
              <template v-else-if="item.type === 'password'">
                <a-input-password
                  :value="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  allow-clear
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                ></a-input-password>
              </template>

              <!-- 单选框 -->
              <template v-else-if="item.type === 'radio'">
                <a-radio-group
                  :value="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                >
                  <a-radio
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </a-radio>
                </a-radio-group>
              </template>

              <!-- 单项选择器 -->
              <template v-else-if="item.type === 'select'">
                <a-select
                  :value="modelValue[`${item.field}`]"
                  :options="item.options"
                  allow-clear
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                >
                  <!-- <a-select-option
                    v-for="option in item.options"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </a-select-option> -->
                </a-select>
              </template>

              <!-- 日期选择器 -->
              <template v-else-if="item.type === 'datepicker'">
                <a-date-picker
                  :value="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                >
                </a-date-picker>
              </template>

              <!-- 日期选择器 -->
              <template v-else-if="item.type === 'rangepicker'">
                <a-range-picker
                  :value="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                >
                </a-range-picker>
              </template>

              <!-- 数字输入框 -->
              <template v-else-if="item.type === 'inputnumber'">
                <a-input-number
                  :value="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                />
              </template>

              <!-- 多选框 -->
              <template v-else-if="item.type === 'checkbox'">
                <a-checkbox-group
                  :value="modelValue[`${item.field}`]"
                  :options="item.options"
                  v-bind="item.otherOptions"
                  @update:value="handleValueChange($event, item.field)"
                />
              </template>

              <!-- Switch 开关 -->
              <template v-else-if="item.type === 'switch'">
                <a-switch
                  :checked="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:checked="handleValueChange($event, item.field)"
                >
                  <template #checkedChildren><check-outlined /></template>
                  <template #unCheckedChildren><close-outlined /></template>
                </a-switch>
              </template>

              <!-- 文本域 -->
              <template v-else-if="item.type === 'textarea'">
                <a-textarea
                  :value="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  allow-clear
                  show-count
                  @update:value="handleValueChange($event, item.field)"
                ></a-textarea>
              </template>

              <template v-else-if="item.type === 'custom'">
                <slot
                  :name="item.field"
                  :value="modelValue[`${item.field}`]"
                  @update:value="handleValueChange($event, item.field)"
                >
                </slot>
              </template>
            </a-form-item>
          </a-col>

          <!-- <a-col v-if="item.type === 'switch'" v-bind="{ span: 8 }">
            <a-form-item
              :label="item.label"
              :name="item.field"
              v-bind="validateInfos[`${item.field}`]"
            >

              <template v-if="item.type === 'switch'">
                <a-switch
                  :checked="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  @update:checked="handleValueChange($event, item.field)"
                >
                  <template #checkedChildren><check-outlined /></template>
                  <template #unCheckedChildren><close-outlined /></template>
                </a-switch>
              </template>
            </a-form-item>
          </a-col> -->
        </template>

        <!-- <a-col>
          <a-form-item>
            <a-button type="primary" html-type="submit"> 搜索 </a-button>
          </a-form-item>
        </a-col> -->
      </a-row>

      <slot name="footer"></slot>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'

import type { FormProps } from 'ant-design-vue'
import { IColLayout, IFormItem, IRowLayout } from './type'
import { FormInstance } from 'ant-design-vue/es/form'

export default defineComponent({
  name: 'MyForm',
  components: {
    CheckOutlined,
    CloseOutlined,
  },
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      required: true,
    },
    modelValue: {
      type: Object,
      required: true,
    },
    validateInfos: {
      type: Object,
      default: () => ({}),
    },
    rowLayout: {
      type: Object as PropType<IRowLayout>,
      default: () => ({}),
    },

    colLayout: {
      type: Object as PropType<IColLayout>,
      default: (): IColLayout => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formRef = ref<FormInstance>()

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    // const handleFinish: FormProps['onFinish'] = async (values) => {
    //   console.log(values)
    // }

    // const handleFinishFailed: FormProps['onFinishFailed'] = (errors) => {
    //   console.log('onFinishFailed', errors)
    // }

    return {
      formRef,
      handleValueChange,
    }
  },
})
</script>

<style lang="less" scoped>
.box {
  background-color: skyblue;
}
</style>

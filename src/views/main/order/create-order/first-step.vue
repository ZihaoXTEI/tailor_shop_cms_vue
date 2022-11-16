<template>
  <div class="step-one">
    <div class="form-container">
      <a-form layout="vertical">
        <a-form-item label="顾客名称" v-bind="validateInfos.customerId">
          <a-select
            v-model:value="formData.customerId"
            :options="customerOption"
          >
          </a-select>
        </a-form-item>
        <a-form-item label="服装类型" v-bind="validateInfos.clothTypeId">
          <a-select
            v-model:value="formData.clothTypeId"
            :options="clothTypeOption"
          ></a-select>
        </a-form-item>
      </a-form>
      <div class="button-container">
        <a-button @click="resetFields">重置</a-button>
        <a-button type="primary" @click="handleNext">下一步</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, toRaw } from 'vue'
import {
  getClothTypeOption,
  getCustomerOption,
} from '../../../../service/main/view/option'
import { OptionList } from '../../../../service/main/view/type'

import { Form } from 'ant-design-vue'

const useForm = Form.useForm

export default defineComponent({
  name: 'FirstStep',
  emits: ['stepChange'],
  setup(props, { emit }) {
    const formData = reactive({
      customerId: '',
      clothTypeId: '',
    })
    // const customerId = ref<string>()
    // const clothTypeId = ref<string>()
    const customerOption = ref<OptionList>([])
    const clothTypeOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: customer } = await getCustomerOption()
      const { data: clothType } = await getClothTypeOption()

      customerOption.value = customer
      clothTypeOption.value = clothType
    })

    // 验证规则
    const formRules = reactive({
      customerId: [
        {
          required: true,
          message: '请选择顾客名称',
        },
      ],
      clothTypeId: [
        {
          required: true,
          message: '请选择服装种类',
        },
      ],
    })

    const { resetFields, validate, validateInfos } = useForm(
      formData,
      formRules,
    )

    const handleNext = () => {
      validate()
        .then(() => {
          console.log(toRaw(formData))
          emit('stepChange', true, formData)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return {
      formData,
      customerOption,
      clothTypeOption,
      validateInfos,

      handleNext,
      resetFields,
    }
  },
})
</script>

<style lang="less" scoped>
.step-one {
  min-height: 250px;
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-container {
    width: 320px;

    .button-container {
      display: flex;
      justify-content: flex-end;

      > button {
        margin-left: 10px;
      }
    }
  }
}
</style>

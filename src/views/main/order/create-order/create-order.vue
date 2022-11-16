<template>
  <my-card>
    <a-steps :current="currentStep">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>步骤一</template>
        <template #description>
          <span>选择顾客与订做服装类型</span>
        </template>
      </a-step>
      <a-step title="步骤二" description="填写顾客量体数据" />
      <a-step title="步骤三" description="选择布料" />
      <a-step title="步骤四" description="填写剩余信息" />
    </a-steps>

    <!-- <FirstStep></FirstStep> -->

    <component
      :is="stepComponents[currentStep]"
      @step-change="handleStepChange"
    />
  </my-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import FirstStep from './first-step.vue'
import SecondStep from './second-step.vue'
import ThirdStep from './third-step.vue'
import FourthStep from './fourth-step.vue'

export default defineComponent({
  name: 'CreateOrder',
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
  },
  setup() {
    const currentStep = ref<number>(0)
    const stepComponents = ref([
      'FirstStep',
      'SecondStep',
      'ThirdStep',
      'FourthStep',
    ])

    let order = {
      orderName: '',
      orderNumber: 1,
      totalAmount: 0,
      paymentMethod: 0,
      bookedAmount: 0,
      orderStatus: 1,
      deadline: '',
      customerId: '',
      clothTypeId: '',
      anthroMeasureId: '',
    }

    const handleStepChange = (flag: boolean, data: object) => {
      if (flag && currentStep.value < 3) {
        currentStep.value++
      } else if (currentStep.value > 0) {
        currentStep.value--
      }

      if (data) {
        console.log('+-+', data)
        order = { ...order, ...data }
      }
    }

    return {
      currentStep,
      stepComponents,

      handleStepChange,
    }
  },
})
</script>

<style lang="less" scoped></style>

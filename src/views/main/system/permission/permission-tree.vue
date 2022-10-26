<template>
  <!-- <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
    :field-names="fieldNames"
  ></a-tree> -->
  <a-tree-select
    :value="idList"
    placeholder="请选择权限编号"
    allow-clear
    tree-checkable
    tree-default-expand-all
    :show-checked-strategy="SHOW_ALL"
    :tree-data="treeData"
    @update:value="handleValueChange"
  >
  </a-tree-select>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  PropType,
  ref,
  toRaw,
  watch,
} from 'vue'
import { OptionList } from '../../../../service/main/view/type'

import { TreeSelect } from 'ant-design-vue'
const SHOW_ALL = TreeSelect.SHOW_ALL

export default defineComponent({
  name: '',
  props: {
    /**
     * 展示数据
     */
    treeData: {
      type: Array as PropType<OptionList | []>,
      required: true,
    },
    /**
     * 默认值
     */
    valueList: {
      type: [String, Number, Array],
      default: (): (string | number)[] => [],
    },
    /**
     * Tree-Select 其它配置
     */
    treeSelectConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const idList = ref<(string | number)[]>([])

    watch(idList, () => {
      console.log('idList', toRaw(idList.value))
    })

    // 监听编辑数据变化
    watch(
      () => props.valueList,
      (newValue) => {
        if (newValue && !Array.isArray(newValue)) {
          idList.value = [newValue]
        } else {
          idList.value = newValue as (string | number)[]
        }
      },
    )

    onBeforeMount(() => {
      // 每次挂载前都清空 otherFormValue
      emit('update:modelValue', [])
    })

    const handleValueChange = (value: (string | number)[]) => {
      idList.value = value
      emit('update:modelValue', value)
    }

    // 替换 treeNode 中 title,value,key,children 字段
    const fieldNames = { children: 'children', title: 'label', value: 'value' }

    return {
      idList,

      SHOW_ALL,
      fieldNames,

      handleValueChange,
    }
  },
})
</script>

<style lang="less" scoped></style>

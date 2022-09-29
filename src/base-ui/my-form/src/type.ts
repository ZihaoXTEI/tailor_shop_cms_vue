import type { Rule } from 'ant-design-vue/es/form'

type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'datepicker'
  | 'rangepicker'
  | 'radio'
  | 'inputnumber'
  | 'checkbox'
  | 'switch'
  | 'textarea'

// 表单内容
export interface IFormItem {
  /**
   * 绑定属性名
   */
  field: string

  /**
   * 表单组件类型
   */
  type: IFormType

  /**
   * 标签文本
   */
  label: string

  /**
   * 表单验证规则
   */
  rules?: any[]

  /**
   * 占位文本
   */
  placeholder?: string

  /**
   * 带有 options 多项数据
   */
  options?: IFormItemOptions[]

  /**
   * 其它特殊属性
   */
  otherOptions?: any

  /**
   * 是否隐藏表单组件
   */
  isHidden?: boolean
}

export interface IForm {
  // 表单内容
  formItems: IFormItem[]

  // 表单验证规则
  formRules?: Record<string, Rule[]>

  /**
   * 标签文本宽度
   */
  labelWidth?: string

  /**
   * 每行布局
   */
  rowLayout?: IRowLayout

  /**
   * 每列布局
   */
  colLayout?: IColLayout

  /**
   * 表单组件样式
   */
  itemStyle?: any
}

export interface IRowLayout {
  gutter?: number | Record<string, unknown> | Array<number> // 栅格间隔 object: { xs: 8, sm: 16, md: 24} Array: [水平间距, 垂直间距]
  align?: 'top' | 'middle' | 'bottom' // flex 布局下的垂直对齐方式
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' // flex 布局下的水平排列方式
  wrap?: boolean // 是否自动换行
}

// a-col 的响应式栅格属性
export interface IColLayout {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
  span?: number
}

interface IFormItemOptions {
  value: string | number
  label: string
  disable?: boolean
}

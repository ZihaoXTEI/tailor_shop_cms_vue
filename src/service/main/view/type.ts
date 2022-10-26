export interface IOptionResult {
  label: string
  value: string | number
  children?: IOptionResult[]
}

export interface IMenuOptionResult {
  label: string
  value: number
  url: string
}

export type OptionList = IOptionResult[] | []

export type MenuOptionList = IMenuOptionResult[] | []

import { App } from 'vue'

import MyCard from '../base-ui/my-card'
import MyForm from '../base-ui/my-form'
import MyTable from '../base-ui/my-table'
import MyCountup from '../base-ui/my-countup'
import MyImage from '../base-ui/my-image'
import MyMultipleSelect from '../base-ui/my-multiple-select'

export function globalRegister(app: App): void {
  app.component(MyCard.name, MyCard)
  app.component(MyForm.name, MyForm)
  app.component(MyTable.name, MyTable)
  app.component(MyCountup.name, MyCountup)
  app.component(MyImage.name, MyImage)
  app.component(MyMultipleSelect.name, MyMultipleSelect)
}

import { App } from 'vue'

import MyCard from '../base-ui/my-card'
import MyForm from '../base-ui/my-form'
import MyTable from '../base-ui/my-table'

export function globalRegister(app: App): void {
  app.component(MyCard.name, MyCard)
  app.component(MyForm.name, MyForm)
  app.component(MyTable.name, MyTable)
}

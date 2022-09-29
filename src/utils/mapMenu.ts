import { RouteRecordRaw } from 'vue-router'
import Menu from '../entities/Menu'

// const customer = () => import('@/views/main/user/customer/customer.vue')

// export default {
//   path: '/main/user/customer',
//   name: 'customer',
//   component: customer,
//   children: [],
// }

export function mapMenuToRoutes(userMenu: Menu[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const modules = import.meta.glob('../views/**/**.vue')

  const _recurseGetRoute = (userMenu: Menu[]) => {
    for (const menu of userMenu) {
      if (menu.menuLevel === 2) {
        const moduleName = menu.url.split('/')[1] || '' // ['', 'user', 'customer']
        // console.log(`../views/main${menu.url}/${menu.viewName}.vue`)
        // console.log(
        //   `../views/main/${moduleName}/${menu.viewName}/${menu.viewName}.vue`,
        // )
        let url: string
        if (moduleName == 'dashboard') {
          url = `../views/main/${moduleName}/${menu.viewName}.vue`
        } else {
          url = `../views/main/${moduleName}/${menu.viewName}/${menu.viewName}.vue`
        }
        const route: Route = {
          path: `/main${menu.url}`,
          name: menu.viewName as string,
          // component: () => import(`@/views/main${menu.url}/${menuName}.vue`),

          // /* @vite-ignore */ `../views/main/${moduleName}/${menu.viewName}/${menu.viewName}.vue`
          // /* @vite-ignore */ `../views/main${menu.url}/${menu.viewName}.vue`

          component: /* @vite-ignore */ modules[url],
        }

        routes.push(route)
      } else {
        _recurseGetRoute(menu.childMenuList)
      }
    }
  }

  _recurseGetRoute(userMenu)

  return routes
}

interface Route {
  path: string
  name: string
  component: any
}

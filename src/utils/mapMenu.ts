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
        const menuName = menu.url.split('/').pop() || ''
        const route: Route = {
          path: `/main${menu.url}`,
          name: menuName,
          // component: () => import(`@/views/main${menu.url}/${menuName}.vue`),
          component:
            modules[
              /* @vite-ignore */ `../views/main${menu.url}/${menuName}.vue`
            ],
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

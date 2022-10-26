import { RouteRecordRaw } from 'vue-router'
import Menu from '../entities/Menu'

interface IRoute {
  path: string
  name: string
  component: any
}

interface IBreadcrumb {
  name: string
  path?: string
}

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
        const route: IRoute = {
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

export function pathMapBreadcrumbs(
  userMenu: Menu[],
  currentPath: string,
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []

  const pathList = currentPath.split('/')
  const secondPath = `/${pathList[2]}`

  const currentMenu = userMenu.find((menu) => menu.url === secondPath)
  if (currentMenu) {
    breadcrumbs.push({ name: currentMenu.menuName, path: currentMenu.url })
  }

  if (pathList.length > 3) {
    let menu = currentMenu
    for (let i = 3; i < pathList.length; i++) {
      menu = menu?.childMenuList.find((item) => {
        return item.url.includes(pathList[i])
      })

      if (menu) {
        breadcrumbs.push({ name: menu.menuName, path: menu.url })
      } else {
        break
      }
    }
  }

  // if (pathList[3] && currentMenu && currentMenu.childMenuList.length !== 0) {
  //   const path = currentPath.replace('/main', '')
  //   const menu = currentMenu.childMenuList.find((menu) => menu.url === path)
  //   if (menu) {
  //     breadcrumbs.push({ name: menu.menuName, path: menu.url })
  //   }
  // }

  return breadcrumbs
}

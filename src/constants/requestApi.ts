export enum InventoryAPI {
  Fabric = '/inventory/fabric/',
  FabricInbound = '/inventory/fabricinbound/',
  FabricInventory = '/inventory/fabricinventory/',
  Supplier = '/inventory/supplier/',
}

// export enum OrderAPI{

// }

export enum SystemAPI {
  Menu = '/system/menu/',
  Permission = '/system/permission/',
  Role = '/system/role/',
  UserRole = '/system/userrole/',
  RolePermission = '/system/rolepermission/',
}

export enum UserAPI {
  AnthroMeasure = '/user/anthromeasure/',
  Customer = '/user/customer/',
  Staff = '/user/staff/',
  User = '/user/',
  CustomerFavorite = '/user/customerfavorite/',
}

export enum DataAPI {
  ClothType = '/data/clothtype/',
  ClothTypeConsumption = '/data/clothtypeconsumption/',
  FabricType = '/data/fabrictype/',
}

export enum FileAPI {
  UploadFabricImage = 'http://localhost:9000/upload/fabric',
  DeleteFabricImage = '/upload/delete/',
}

export enum OptionAPI {
  FabricType = '/option/fabrictype',
  Fabric = '/option/fabric',
  Supplier = '/option/supplier',
  Staff = '/option/staff',
  Customer = '/option/customer',
  Menu = '/option/menu',
  Role = '/option/role',
  Permission = '/option/permission',
}

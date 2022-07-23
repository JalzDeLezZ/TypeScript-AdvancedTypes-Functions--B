export enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  userName: string;
  role: ROLES;
}


const jalzUser : User = {
  userName: 'jalz',
  role: ROLES.ADMIN,
}

enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

type User = {
  userName: string;
  role: ROLES;
}


const jalzUser : User = {
  userName: 'jalz',
  role: ROLES.ADMIN,
}

import { User, ROLES } from "./01-enum"

const currentUser : User = {
  userName: 'Jalz',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    // console.log('You are admin')
    return true
  } else {
    // console.log('You are not admin')
    return false
  }
}

const rta = checkAdminRole();
// console.log("Are you admin? ", rta);


export const checkRole = (role1:string, role2:string) => {
  if (currentUser.role === role1){
    return true
  } else if (currentUser.role === role2){
    return true
  }
  return false
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
// console.log("Are you admin? ", rta2);


export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true
  }
  return false
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
// console.log("Are you admin? ", rta3);


export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true
  }
  return false
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log("Are you admin? ", rta4);

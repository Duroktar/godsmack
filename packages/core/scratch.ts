
function userHasPermission(requiredRoles: string[], userRoles: string[]) {
  return requiredRoles.every(role => userRoles.includes(role))
}

console.log(userHasPermission(['user', 'edit'], ['user', 'edit'])) // true
console.log(userHasPermission(['user', 'edit'], ['user']))         // false
console.log(userHasPermission(['admin'], ['admin', 'user']))       // true
console.log(userHasPermission([], ['user']))                       // true

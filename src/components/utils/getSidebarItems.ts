import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSideBarItems";
import type { TRole } from "@/types";
// import { userSidebarItems } from "@/routes/userSidebarItems";
// import { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems, ...userSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.user:
      return [...userSidebarItems];
    default:
      return [];
  }
};























// import type { TRole } from '@/types';
// import { adminSidebarItems } from '@/routes/adminSidebarItems';
// import { userSidebarItems } from '@/routes/userSideBarItems';
// import { role } from '@/constants/role';
// export const getSidebarItems = (userRole : TRole) => {
 
//  console.log(userRole)
//  console.log(role.superAdmin)

//     switch (userRole) {
//         case role.superAdmin:
//             return [...adminSidebarItems];
//         case role.admin:
//             return [...adminSidebarItems];
    
//         case role.user:
//             return [...userSidebarItems];
    
//         default:
//             return [];
//     }
// }
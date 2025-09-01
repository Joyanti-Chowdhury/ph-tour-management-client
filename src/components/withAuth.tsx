import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import type { TRole } from "@/types"
import type { ComponentType } from "react"
import { Navigate } from "react-router"
import { role } from '../constants/role';

export const withAuth = (Component :ComponentType, requiredRole?: TRole ) => {
    return function AuthWrapper(){
  const {data, isLoading} = useUserInfoQuery(undefined)
      console.log("inside with auth wrapper", data)
  if(isLoading){
    return <div>Loading...</div>
  }
  if(!isLoading && !data?.data?.email){
  
    return <Navigate to="/login" />
  }

   if(requiredRole && !isLoading &&  requiredRole !== data?.data?.role){

    return <Navigate to="/unauthorized" />
   }

        // if(data && data.role !== requiredRole){
        //     return <Navigate to="/login" />
        // }


        return (
            <Component />
        )
    }
}
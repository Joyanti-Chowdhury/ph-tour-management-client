export  type { ISendOtp ,IVerifyOtp, ILogin , IRegister,} from './auth.types';


export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}
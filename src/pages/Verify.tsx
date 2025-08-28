import  { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner"
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Dot } from "lucide-react";
import { useSendOtpMutation, useVerifyOtpMutation } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast("You submitted the following values", {
//       description: (
//         <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

const Verify = () => {
  const location = useLocation();
  console.log(location.state);
  //    const navigate = useNavigate()
     const [email] = useState(location.state)
 const [confirmed, setConfirmed] = useState(false);
 const [sendOtp] = useSendOtpMutation();
 const [verifyOtp] = useVerifyOtpMutation();
const [timer, setTimer  ] = useState(120);


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const handleConfirm = async() => {
   
    setConfirmed(true)


    //  const toastId = toast.loading("Sending OTP")
    // try {
    //    const res = await sendOtp ({email: email}).unwrap();
    //   if(res.success){
    //     toast.success("OTP sent successfully" ,{id: toastId})
    //   }
    //     setConfirmed(true);

    // } catch (error) {
    //   console.log(error)
    // }
  
  }
  const onSubmit = async(data: z.infer<typeof FormSchema>) => {
         const toastId = toast.loading("Verifying OTP")

    const userInfo = {
      email: email,
      otp: data.pin
    }

    try {

      const res = await verifyOtp(userInfo).unwrap();
      if(res.success){
        toast.success("OTP verified successfully",{id: toastId})
        setConfirmed(true);
      }
    } catch (error) {
      console.log(error)
    }
  
  };


  // todo

  //    useEffect(() => {

  //     if(!email){
  //     navigate("/")
  //     }

  //    },[email])

   useEffect(() => {
    const timerId = setInterval(() => {
        if(email && confirmed){
          setTimer((prev => prev - 1))
        }
    },1000)
   },[email,confirmed])
   
  return (
    <div className="grid place-content-center h-screen">
     {
        confirmed ? (<Card className="">
        <CardHeader>
          <CardTitle>Verify Your Mail Address</CardTitle>
          <CardDescription>
            Enter your 6 digit code below to sent to your Email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="otp-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className=" space-y-6"
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <Dot></Dot>
                    
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                       
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      <Button variant="link"className=''>Resent OTP </Button>
                      {timer}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button form="otp-form" type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>) :(<Card>
        <CardHeader>
          <CardTitle className='text-center text-xl'>Verify Your Mail Address</CardTitle>
          <CardDescription>
            Enter your 6 digit code below to sent to your Email
          </CardDescription>
        </CardHeader>
       
        <CardFooter className="flex justify-end gap-2">
          <Button onClick={handleConfirm} form="otp-form" type="submit" className="w-[300px]">
          Confirm
          </Button>
        </CardFooter>
      </Card>)
     }
     
     
      



      
    </div>
  );
};

export default Verify;

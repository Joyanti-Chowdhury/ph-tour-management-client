import { useGetTourTypesQuery, useRemoveTourTypeMutation } from "@/redux/features/Tour/tour.api"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {AddTourTypeModal} from "@/components/modules/admin/tourType/AddTourModal"
import DeleteConfirmation from "@/components/DeleteConfirmation"
import { toast } from "sonner"

export default function AddTourType() {

  const {data} = useGetTourTypesQuery(undefined)
  const [removeTourType] = useRemoveTourTypeMutation()
  // console.log(data)

 const handleRemoveTourType = async(tourId :string) => {
   const toastId = toast.loading("Removing Tour Type")
  try {
      const res = await removeTourType(tourId).unwrap()
      if(res.success){
        toast.success("Tour Type removed successfully",{id: toastId})
      }
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  
 }
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-between my-16">
        <h1 className="text-xl">Tour Types</h1>
        {/* <Button>Add Tour Type</Button> */}
        <AddTourTypeModal/>
      </div>
     <div className=" border border-muted rounded-md">
       <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-right">Action</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((item :{name:string,_id:string}) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium w-full">{item?.name}</TableCell>
            <TableCell className="font-medium">
              {/* <Button className="btn-sm bg-red-600"><Trash2/></Button> */}
              <DeleteConfirmation onConfirm={() => handleRemoveTourType(item._id)} children={<Button className="btn-sm bg-red-600"><Trash2/></Button>}>
    

              </DeleteConfirmation>
            </TableCell>
          
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
         
        </TableRow>
      </TableFooter>
    </Table>
     </div>
    </div>
  )
}

  

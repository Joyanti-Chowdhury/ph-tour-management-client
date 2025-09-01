import { useGetTourTypesQuery } from "@/redux/features/Tour/tour.api"
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
export default function AddTourType() {

  const {data} = useGetTourTypesQuery(undefined)
  console.log(data)

 
  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-between my-16">
        <h1 className="text-xl">Tour Types</h1>
        <Button>Add Tour Type</Button>
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
              <Button className="btn-sm bg-red-600"><Trash2/></Button>
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

  

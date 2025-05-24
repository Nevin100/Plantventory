/* eslint-disable @typescript-eslint/no-explicit-any */
import { deletePlant } from "@/actions/plant.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button, buttonVariants } from "@/Components/ui/button";
import { OctagonAlert, Sprout } from "lucide-react";
import toast from "react-hot-toast";


interface DeleteDialogProps {
  plant: {
    id: string
  }
}

export default function DeleteDialog({ plant }: DeleteDialogProps) {

  const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await deletePlant(plant.id)
      toast.success("Plant Deletion Successful")
    } catch (error : any){
      console.log(error);
      toast.error("Plant Deletion Failed")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' className=" flex items-center gap-2 cursor-pointer" asChild>
                  <span >
                    <Sprout className="w-4 h-4"/>
                    Delete Plant
                  </span>
                </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <AlertDialogTitle>
            <div className="mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
              <OctagonAlert className="h-7 w-7 text-destructive" />
            </div>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px] text-center">
            This action cannot be undone. This will permanently delete your
            plant and remove your plant data from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
        <AlertDialogFooter className="mt-2 sm:justify-center">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit"
            className={buttonVariants({ variant: "destructive" })}
          >
            Delete
          </AlertDialogAction>
          </AlertDialogFooter>
          </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {useState} from "react";
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

import { Sprout } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Combobox } from "@/Components/ui/combo-box";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { editPlant } from "@/actions/plant.action";
import toast from "react-hot-toast";
import { getPlantsId } from "@/actions/plant.action";

type Plant = NonNullable<Awaited<ReturnType<typeof getPlantsId>>>

interface EditDialogProps {
  plant : Plant;
} 

export default function EditDialog({plant}: EditDialogProps) {

  const [formData,setFormData] = useState({
    name:plant?.name.trim(),
    description:(plant?.description || "").trim(),
    stock:plant?.stock,
    price:plant?.price,
    category:plant?.category.trim(),
    userId:plant?.userId.trim(),
    imageUrl:plant?.imageUrl || ""
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData({...formData, [field]:value})
  }

  
  const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const newPlant = await editPlant(plant.id ,formData);
      console.log(newPlant);
      toast.success("Plant Updation Successful!!")
    }catch(error : any){
      console.log(error);
      toast.error("Plant Updation Failed")
    }
  }


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='default' className="ml-auto flex items-center gap-2 cursor-pointer" asChild>
          <span >
            <Sprout className="w-4 h-4"/>
            Edit Plant
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a Plant ?</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            Fill out the form below to edit the plant to your inventory
          </AlertDialogDescription>

          <form onSubmit={handleSubmit} className="mb-6">
          <div className="grid grid-cols-2 mb-4 gap-8">
            <div>
              <Label htmlFor="name" className="mt-4">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter name"
                className="mt-2"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category" className="mt-4 mb-2">Category</Label>
              <Combobox
                value={formData.category}
                onChange={(val) => handleChange("category", val)}
              />
            </div>
          </div>
          <Label htmlFor="description" className="mt-4 mb-2">Description</Label>
          <Textarea
            id="description"
            placeholder="Type your message here."
            rows={5}
            className="mb-2"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stock" className="mt-2">Stock</Label>
              <Input
                id="stock"
                type="number"
                placeholder="Enter stock quantity"
                value={formData.stock}
                className="mt-4"
                onChange={(e) => handleChange("stock", Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="price" className="mt-2">Price</Label>
              <Input
                id="price"
                type="number"
                className="mt-4"        
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) => handleChange("price", Number(e.target.value))}
              />
            </div>
          </div>

          {/* Image Upload*/}
          {/* <div className="py-5">
          <ImageUpload
            endpoint="postImage"
            value={formData.imageUrl}
            onChange={(url) => {
              handleChange("imageUrl", url);
            }}
          />
          </div> */}
          

          <AlertDialogFooter className="mt-8">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Submit</AlertDialogAction>
          </AlertDialogFooter>
        </form>
        </AlertDialogHeader>
       
      </AlertDialogContent>
    </AlertDialog>
  );
}

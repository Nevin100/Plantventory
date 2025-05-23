/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";
import getplants from "@/actions/plant.action";
import { useRouter } from "next/navigation";

type Plant = Awaited<ReturnType<typeof getplants>>

interface InventoryTableProps {
  plants:Plant
}

export default function InventoryTable({plants} : InventoryTableProps) {

  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchterm] = useState("");
  const Router = useRouter()
  const filteredPlants = plants?.userPlants?.filter((plants : any) => 
  plants.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory == "" || plants.category == selectedCategory))

  return (
    <div className="w-full ">
       <div className="flex flex-row justify-start items-center gap-4 py-4">
    {/* Filter input container */}
    <div className="relative w-full max-w-sm">
      <Input placeholder="Filter Plants .." className="pl-10" value={searchTerm} onChange={(e) => setSearchterm(e.target.value)} />
      <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
    </div>

    {/* Combobox placed outside of the Input container */}
    <div className="w-fit">
      <Combobox value={selectedCategory} onChange={(val) => setSelectedCategory(val)} />
    </div>
  </div>

 <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>price</TableHead>
          <TableHead className="space-x-24 justify-end flex">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredPlants?.map((plant : any) => {
          const slugifiedName = plant.name.toLowerCase().replace(/\s+/g,"-");
          const slug = `${plant.id}--${slugifiedName}`;
          const url = `/plants/${slug}`  ;
          return (
          <TableRow className="cursor-pointer" key={plant.id} onClick={() => Router.push(url)}>
            <TableCell>{plant.name}</TableCell>
            <TableCell>{plant.category}</TableCell>
            <TableCell className="font-bold">{plant.stock}</TableCell>
            <TableCell>{plant.price}</TableCell>
            <TableCell>
              <div className="space-x-4 flex justify-end">
                <h1>Edit Button</h1>
                <h1>Delete Button</h1>
              </div>
              
            </TableCell>
          </TableRow> 
        )})}
      </TableBody>  
    </Table>
    </div>

  );
}

import getplants from "@/actions/plant.action";
import InventoryTable from "@/Components/InventoryTable";
import { stackServerApp } from "@/stack";
import {  SignUp } from "@stackframe/stack";

const Plants = async () => {
  const user = await stackServerApp.getUser();
  const plants = await getplants()

  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6 ">
          <div className="lg:col-span-full">
            <InventoryTable plants={plants} />
          </div>
        </div>
      ): (
        <div className="flex justify-center items-center mt-10 border-2 mx-120 px-5 py-6 rounded-xl  ">
          <SignUp/>
        </div>
      )}
    </>
  )
}

export default Plants;
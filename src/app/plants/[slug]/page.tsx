import PlantCard from './PlantCard';
import { getPlantsId } from "@/actions/plant.action";
import { stackServerApp } from "@/stack";
import { SignIn } from "@stackframe/stack";

const PlantPage = async({params} : {params : {slug : string}}) => {
  const user = await stackServerApp.getUser();
  const [id] = params.slug.split("--");
  const plant = await getPlantsId(id);
  
  if(!user) {return <SignIn/>}
  
  return (
    <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6 ">
          <div className="lg:col-span-full">
            <PlantCard plant = {plant}/>
          </div>
        </div>
  )
}

export default PlantPage;
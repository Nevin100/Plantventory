'use server';

// import { revalidatePath } from "next/cache";
import { getUserId } from "./user.action";
import { prisma } from "@/lib/prisma";

/* eslint-disable @typescript-eslint/no-explicit-any */
// ✅ The function that fetches plants for the current user, optionally filtered by search term
const getplants = async (searchTerm?: string) => {
  try {
    // 🔐 Get the currently logged-in user's ID
    const CurrentUser = await getUserId();

    // 🔍 Build the `where` condition to find plants belonging to the user
    const whereClause: any = {
      userId: CurrentUser // ✅ filter by userId
    }

    // 🔍 If there's a search term, add a name-based filter (case-insensitive)
    if (searchTerm) {
      whereClause.name = {
        contains: searchTerm,     // 👀 match names that contain the search term
        mode: "insensitive"       // 🔤 case-insensitive search
      }
    }

    // 🧑‍🌾 Find all plants matching the filter from the Prisma database
    const userPlants = await prisma.plant.findMany({
      where: whereClause
    });

    // // 🔄 Revalidate the path (usually for ISR/SSG to update cache)
    // revalidatePath("/");

    // ✅ Return the data
    return { success: true, userPlants };

  } catch (error: any) {
    // 🐛 Log any errors
    console.log(error)
  }
}

// 📤 Export the function for use in routes or components
export default getplants;




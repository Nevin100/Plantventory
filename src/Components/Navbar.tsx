import { Button } from "@/Components/ui/button";
import Link from "next/link";
import { Sprout, HomeIcon, LogIn, LogOutIcon } from "lucide-react";
import  DarkModeToggle  from "@/Components/toggle-mode";
import { stackServerApp } from "@/stack";
import { UserButton } from "@stackframe/stack";


 const Navbar = async () => {
  const user = await stackServerApp.getUser();
   const app = await stackServerApp.urls;
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backgdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* {Logo} */}

        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href={"/"} className="text-xl font-bold text-primary font-mono tracking-wider">
            🌱 Plantventory
          </Link>
        </div>

        {/* {Navbar Components} */}
        <div className="hidden md:flex space-x-4 items-center ">
          <Button variant={"ghost"} className="flex items-center gap-2" asChild>
            <Link href={"/plants"}>
              <Sprout className="w-4  h-4" />
              <span className="hiddne lg:inline">Plants</span>
            </Link>
          </Button>

          <Button variant={"ghost"} className="flex items-center gap-2" asChild>
            <Link href={"/"}>
              <HomeIcon className="w-4  h-4" />
              <span className="hiddne lg:inline">Home</span>
            </Link>
            </Button>

          <Button variant={"ghost"} className="flex items-center gap-2" asChild>
              <DarkModeToggle/>
            </Button> 

            {user ? (
              <Button variant={"ghost"} className="flex items-center gap-4" asChild>
            <Link href={app.signOut}>
                  <LogOutIcon className="w-4 h-4" />
                  <span className="hiddne lg:inline">SignOut</span>
                   <UserButton/>
            </Link>
              </Button>) :
              (
              <Button variant={"ghost"} className="flex items-center gap-2" asChild>
                <Link href={app.signIn}>
                  <LogIn className="w-4 h-4" />
                  <span className="hiddne lg:inline">LogIn</span>
                </Link>
              </Button>   
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
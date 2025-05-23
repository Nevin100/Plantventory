import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import { Sprout } from "lucide-react";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full px-2.5 py-2 border-none">
            <span className="text-primary font-semibold text-sm flex gap-2 ">
              Plantventory <Sprout/>
            </span>              
          </Badge>
          <div className="mt-6 flex items-center -gap-2">
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
              An Inventory for Plants
            </h1>
            <span>
                <Sprout className="text-green-500" size={100}/> 
            </span>
          </div>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none" />
      </div>
    </div>
  );
};

export default Hero05;

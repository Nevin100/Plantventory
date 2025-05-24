import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero05 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary text-white rounded-full py-1 border-none">
            Just released 🌱v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            PlantVentory 🌱
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
           PlantVentory is a personalized digital plant inventory and notes platform designed to help users keep track of their favorite plants and herbs. It allows individuals to curate a customized list of flora, including medicinal herbs, houseplants, and garden greens.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base cursor-pointer">
              Get Started 🌱 <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none" >
          <Image
            src={"/Banner.jpg"}
            alt="Aloe-vera" 
            className="w-full h-full object-cover" height={1000} width={1000}/>
            
        </div>
      </div>
    </div>
  );
};

export default Hero05;

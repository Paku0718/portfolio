import PageLayout from "@/components/PageLayout";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col w-full py-5 md:py-10">
      <PageLayout>
        <Title>Services I Provide</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {servicesData?.map((item)=>(
            <div key={item?._id} className="flex flex-col p-6 bg-lightSky/5 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md group hover:shadow-lg gap-2 hoverEffect">
              <div className="w-full flex item-center justify-between">
                <p>{item?._id}</p>
                <Link href={item?.href} target="_blank"><ArrowUp className="rotate-45"/></Link>
              </div>
              <h2 className="font-semibold">{item?.title}</h2>
              <p className="text-sm md:text-base test-white/80">{item?.description}</p>
              <div className="border-b border-white/20 w-full mt-2"/>
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default ServicesPage;

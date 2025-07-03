"use client";

import { TProject } from "@/app/types/projectType";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const ProductItem = ({ projectData }: { projectData: TProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const image = container.querySelector("img");

    if (!image) return;

    const distanceToScroll = image.clientHeight - container.clientHeight;
    let scrollStep = 0;
    const scrollInterval = 5;

    intervalRef.current = setInterval(() => {
      if (scrollStep >= distanceToScroll) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        return;
      }
      scrollStep += scrollInterval;
      container.scrollTo(0, scrollStep);
    }, 15);
  };

  const resetScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    containerRef.current?.scrollTo(0, 0);
  };

  return (
    <Link
      href={`/project/${projectData._id}`}
      className="block mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {projectData.title}
          </h2>
          <p className="mt-4 text-gray-300">
            {projectData.content?.slice(0, 100)}....
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={scrollToBottom}
          onMouseLeave={resetScroll}
          className="overflow-hidden h-[300px] w-96"
        >
          <Image
            src={projectData?.image || "/fallback-image.jpg"}
            alt={projectData?.title || "Project Image"}
            width={500}
            height={600}
            className="rounded object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

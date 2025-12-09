"use client";

import { TProject } from "@/app/types/projectType";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const ProductItem = ({ projectData }: { projectData: TProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    const container = containerRef.current;
    const image = container?.querySelector("img");

    if (!container || !image) return;

    const distanceToScroll = image.clientHeight - container.clientHeight;
    let scrollStep = 0;
    const scrollInterval = 5;

    intervalRef.current = setInterval(() => {
      if (scrollStep >= distanceToScroll) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        return;
      }
      scrollStep += scrollInterval;
      container.scrollTo({ top: scrollStep });
    }, 15);
  };

  const resetScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    containerRef.current?.scrollTo({ top: 0 });
  };

  return (
    <>
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Link
        href={`/project/${projectData._id}`}
        className="block px-4 py-6 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          {/* Text Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              {projectData.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300">
              {projectData.content?.slice(0, 100)}...
            </p>
          </div>

          {/* Scrollable Image Section */}
          <div
            ref={containerRef}
            onMouseEnter={scrollToBottom}
            onMouseLeave={resetScroll}
            className="scroll-container h-[300px] sm:h-[350px] w-full rounded-lg relative overflow-y-scroll"
          >
            <Image
              src={projectData?.image || "/fallback-image.jpg"}
              alt={projectData?.title || "Project Image"}
              width={600}
              height={800}
              className="object-cover w-full"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;

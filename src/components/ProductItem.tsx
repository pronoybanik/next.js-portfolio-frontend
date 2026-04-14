"use client";

import { TProject } from "@/app/types/projectType";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type ProductItemProps = {
  projectData?: TProject;
  loading?: boolean;
};

const ProductItem = ({ projectData, loading = false }: ProductItemProps) => {
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

  // Skeleton loader
  if (loading) {
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

        <div className="block max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 p-4 sm:p-5 lg:p-6 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-pulse">
              <div>
                <div className="h-6 sm:h-7 md:h-8 w-2/3 bg-gray-700/50 rounded mb-3" />
                <div className="h-4 w-full bg-gray-700/50 rounded mb-2" />
                <div className="h-4 w-5/6 bg-gray-700/50 rounded" />
              </div>

              <div className="scroll-container h-[300px] sm:h-[350px] w-full rounded-xl relative overflow-hidden bg-gray-800/50 border border-gray-700/50">
                <div className="w-full h-full bg-gray-700/50" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

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
        href={`/project/${projectData!._id}`}
        className="block max-w-6xl mx-auto group"
      >
        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl shadow-purple-900/10 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 p-4 sm:p-5 lg:p-6 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Text Section */}
            <div>
              <div className="inline-block mb-3">
                <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                  Project
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500">
                {projectData!.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                {projectData!.content?.slice(0, 100)}...
              </p>
              <div className="mt-4 flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Scrollable Image Section */}
            <div
              ref={containerRef}
              onMouseEnter={scrollToBottom}
              onMouseLeave={resetScroll}
              className="scroll-container h-[300px] sm:h-[350px] w-full rounded-xl relative overflow-y-scroll border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-500 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none z-10"></div>
              <Image
                src={projectData?.image || "/fallback-image.jpg"}
                alt={projectData?.title || "Project Image"}
                width={600}
                height={800}
                className="object-cover w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;

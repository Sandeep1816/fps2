"use client";

import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";

interface ExhibitorCardProps {
  name: string;
  logo: string | StaticImageData; // Path to image or a static import
  websiteUrl: string;
  linkedInUrl?: string;
  badgeLabel?: string;
  badgeColor?: string;
  description: string[];
}

const ExhibitorCard: React.FC<ExhibitorCardProps> = ({
  name,
  logo,
  websiteUrl,
  linkedInUrl,
  badgeLabel = "Exhibitor",
  badgeColor = "bg-blue-600",
  description,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const hasMore = description.length > 1;

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      {/* Badge */}
      {badgeLabel && (
        <div
          className={`mb-6 rounded-md ${badgeColor} px-4 py-1.5 text-sm font-semibold text-white shadow-md sm:absolute sm:right-4 sm:top-4 sm:mb-0`}
        >
          {badgeLabel}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Logo Section */}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block size-40 shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 sm:size-48"
        >
          <Image
            src={logo}
            alt={`${name} Logo`}
            width={192}
            height={192}
            className="size-full object-contain p-1"
          />
        </a>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 sm:mb-4 sm:text-3xl">
            {name}
          </h2>

          <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {description[0]}
          </p>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {description.slice(1).map((text, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-gray-700 sm:text-base py-2 "
              >
                {text}
              </p>
            ))}
          </div>

          {hasMore && (
            <p
              className="text-sm leading-relaxed cursor-pointer text-blue-700 sm:text-base underline"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less" : "Read more"}
            </p>
          )}
          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-4 mt-5">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-5 py-2 text-center text-white shadow-md transition hover:bg-blue-700"
            >
              Visit Website
            </a>
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-blue-600 px-5 py-2 text-center text-blue-600 transition hover:bg-blue-100"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorCard;

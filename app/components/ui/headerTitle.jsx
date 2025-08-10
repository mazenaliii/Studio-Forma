"use client";
import React from "react";

export default function HeaderTitle({
  breadcrumb,
  currentPage,
  titlePrimary,
  titleSecondary,
}) {
  return (
    <section className="w-full text-white mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-widest mb-6">
          <span>{breadcrumb}</span>
          <span className="text-[#B17A48]"> • {currentPage}</span>
        </p>
        <h1 className="text-5xl font-playfair font-bold tracking-wide">
          <span className="text-white">{titlePrimary} </span>
          <span className="text-[#B17A48]">{titleSecondary}</span>
        </h1>
        <div className="mt-8 border-b border-[#6B4B2E]"></div>
      </div>
    </section>
  );
}

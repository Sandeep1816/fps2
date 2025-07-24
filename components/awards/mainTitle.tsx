import React from "react";

const AwardsPageMainTitle = ({
  title,
  subTitle = "",
  additional = "",
}: {
  title: string;
  subTitle?: string;
  additional?: string;
}) => {
  return (
    <div className="text-center mb-12">
      <div className="text-center relative mb-8">
        {/* Background stroke text (border only) */}
        <h2
          className="absolute inset-0 -translate-y-1/2 opacity-15 text-6xl md:text-6xl font-extrabold text-transparent z-0 select-none"
          style={{
            WebkitTextStroke: "1px #3AC6D9", // blue-500
          }}
          aria-hidden="true"
        >
          {title}
        </h2>

        {/* Foreground gradient text */}
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#408CFF] to-[#00205B] bg-clip-text">
          {title}
        </h2>
      </div>
      {subTitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subTitle}</p>
      )}

      {additional && (
        <p className="text-lg text-gray-600 max-w-3xl mt-4 mx-auto">{additional}</p>
      )}
    </div>
  );
};

export default AwardsPageMainTitle;

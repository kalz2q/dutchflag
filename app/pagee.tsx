"use client";

// pages/dutch-flag.tsx
import React from "react";
import Head from "next/head";

export default function DutchFlag() {
  return (
    <>
      <Head>
        <title>オランダの国旗 - Tailwind CSS</title>
        <meta name="description" content="Tailwind CSSで描いたオランダの国旗" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        {/* オランダ国旗のコンテナ */}
        <div className="w-[300px] h-[200px] flex flex-col shadow-lg overflow-hidden">
          {/* 上部 - 赤色 (#AE1C28) */}
          <div className="flex-1 bg-[#AE1C28]"></div>

          {/* 中部 - 白色 */}
          <div className="flex-1 bg-white"></div>

          {/* 下部 - 青色 (#21468B) */}
          <div className="flex-1 bg-[#21468B]"></div>
        </div>

        {/* 説明テキスト */}
        <div className="mt-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            オランダの国旗
          </h1>
          <p className="text-gray-600 mb-1">上から赤・白・青の三色旗</p>
          <p className="text-gray-500 text-sm">
            縦横比: 2:3 | 公式色: 赤 #AE1C28 青 #21468B
          </p>
        </div>
      </div>
    </>
  );
}

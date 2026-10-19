"use client";

import { useEffect } from "react";

export default function Error({ error, retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-5 py-24 text-center">
      <h1 className="text-2xl font-semibold">문제가 발생했습니다</h1>
      <p className="text-ash">잠시 후 다시 시도해 주세요.</p>
      <button
        type="button"
        onClick={() => retry()}
        className="rounded-sm border border-rule px-4 py-2 font-archivo text-sm font-medium"
      >
        다시 시도
      </button>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">カウンター</h1>
      <p className="text-4xl mb-4">{count}</p>
      <button onClick={countUp} className="px-6 py-3 bg-blue-500 text-white rounded">
        +1
      </button>
    </div>
  );
}

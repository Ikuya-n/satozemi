"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">カウンター</h1>
      <p className="text-4xl mb-4">{count}</p>
      {count === 0 ? <p>カウントがゼロです</p> : <p>カウント中です</p>}
      {count > 5 && <p className="text-red-500">カウントが 5 を超えました！</p>}
      <button onClick={() => setCount(count + 1)} className="px-6 py-3 bg-blue-500 text-white rounded">
        +1
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">名前入力</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded mb-4"
      />
      <p>こんにちは、{name}さん！</p>
    </div>
  );
}

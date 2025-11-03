"use client";

import { useState } from "react";

export default function Page() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function calcBmi() {
    const h = Number(height);
    const w = Number(weight);
    const bmi = w / ((h / 100) ** 2);
    alert("あなたのBMIは" + bmi + "です。");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">BMI 計算アプリ</h1>
      <div className="mb-4">
        <span>身長 (cm)</span>
        <input
          type="text"
          value = {height}
          onChange = {(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <span>体重 (kg)</span>
        <input
          type="text"
          // ここを書く
          value = {weight}
          onChange = {(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <button onClick={calcBmi} className="px-6 py-3 bg-blue-500 text-white rounded">
        計算する
      </button>
    </div>
  );
}

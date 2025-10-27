"use client";

export default function Page() {

  function add(a: number, b: number) {
    return a + b;
  }

  console.log(add(10, 20));
  //console.log(add("10", 20));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">TypeScript</h1>
    </div>
  );
  
}

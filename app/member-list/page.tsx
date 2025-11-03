"use client";

export default function Page() {
  const members = ["山田太郎", "鈴木花子", "佐藤次郎", "あ"];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">社員リスト</h1>
      <ul className="list-disc list-inside">
        {members.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

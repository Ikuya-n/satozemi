"use client";

function UserCard(props: { name: string; age: number; bio: string }) {
  return (
    <div className="p-4 mb-3 border border-gray-300 rounded">
      <h3 className="text-xl font-bold">{props.name}</h3>
      <p className="text-gray-600">{props.age}歳</p>
      <p className="mt-2">{props.bio}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">メンバー紹介</h1>
      <UserCard name="山田太郎" age={25} bio="エンジニアです。React が好きです。" />
      <UserCard name="鈴木花子" age={30} bio="デザイナーです。UI/UX に興味があります。" />
      <UserCard name="佐藤次郎" age={22} bio="学生です。Web 開発を勉強しています。" />
    </div>
  );
}

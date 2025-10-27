"use client";

export default function Page() {
    function handleClick() {
        alert('ボタンがおされました')
    }
  return (
    <>
      <h1>ボタンを押してみよう</h1>
      <button className="px-4 py-2 bg-blue-500 text-white" onClick = {handleClick}>
        クリック
      </button>
    </>
  );
}


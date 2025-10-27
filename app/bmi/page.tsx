"use client";

export default function Page() {
    type Person = {
        name: string;
        weight: number;
        height: number;
    };
    
    const taro: Person = {
        name: '山田太郎',
        weight: 70,
        height: 170,
    };

    function calcBMI(n: string, w: number, h: number) {
        const bmi = w / (h / 100)**2;
        alert(n + "さんのBMIは" + bmi + "です。");
    }
    return (
        <>
            <h1>BMI計算</h1>
            <button onClick = {() => calcBMI(taro.name, taro.weight, taro.height)} className="px-4 py-2 bg-blue-500 text-white">
                BMI計算
            </button>
        </>
    );
}
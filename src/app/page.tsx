"use client";
import { useState } from "react";
import "./page.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "ไม่",
      "แน่ใจหรอ?",
      "เค้าขอโทษดีกันจริงๆนะค้าบ",
      "นะค้าบบบ",
      "เดี๋ยวพาไปกินของอร่อยๆ",
      "งั้นเดี๋ยวพาไปเดินเล่นที่สวนสาธารณะเอามุ้ยย",
      "น้าค้าบ ไอ้อ้วน",
      "ไม่จริงๆหรอ 😢",
      "เค้าจะตายแล้วนะ",
      "เค้าตายแล้ว แง",
      "ตอนนี้อ้วนกำลังคุยกับผีที่ชื่ออ้นอยู่",
      "นะค้าบเบ้บบ",
      ":((((",
      "เค้าผิดไปแล้วจริงๆ",
      "เค้าจะปรับปรุงตัว นะครับ ไม่ทำแบบนี้อีกแล้ว",
      "ไม่ :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            เย่ยยยยย รักอ้วนที่สุดเลยค้าบ
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">เค้าขอโทษดีกันได้มั้ยคับ 🥺?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

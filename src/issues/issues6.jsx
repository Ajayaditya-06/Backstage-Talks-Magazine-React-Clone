import cover from "../assests/issue6_cover.png";

export default function Issue6() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={420} />
      <div className="text-base font-semibold">Issue #6</div>
      <div className="text-sm text-[#E568AC] tracking-tight font-semibold mt-4">
        BUY HERE
      </div>
      <div className="text-sm  tracking-tight font-semibold mt-4">
        or in <p className="text-[#E568AC] inline">selected stores</p>.
      </div>
    </div>
  );
}

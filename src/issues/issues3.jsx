import cover from "../assests/issue3_cover.png";

export default function Issue3() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={420} />
      <div className="text-base font-semibold">Issue #3</div>
      <div className="text-sm text-white tracking-tight font-semibold mt-4">
        BUY HERE
      </div>
      <div className="text-sm  tracking-tight font-semibold mt-4">
        or in <p className="text-white inline">selected stores</p>.
      </div>
    </div>
  );
}

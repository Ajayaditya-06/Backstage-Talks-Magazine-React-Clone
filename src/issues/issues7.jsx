import cover from "../assests/issue7_cover.png";

export default function Issue7() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={420} />
      <div className="text-base font-semibold">Issue #7</div>
      <div className="text-sm tracking-tight font-semibold mt-4">
        <span className="inline text-white"> BUY HERE</span> (Europe)
      </div>
      <div className="text-sm tracking-tight font-semibold">
        <span className="inline text-white"> BUY HERE</span> (UK & Overseas)
      </div>
      <div className="text-sm  tracking-tight font-semibold mt-4">
        or in <p className="inline text-white">selected stores</p>
      </div>
    </div>
  );
}

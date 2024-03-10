import cover from "../assests/issue7_cover.png";

export default function Issue7() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={450} />
      <div className="text-lg font-semibold">Issue #7</div>
      <div className="text-base tracking-tight font-semibold mt-4">
        <span className="inline text-white"> Buy Here</span> (Europe)
      </div>
      <div className="text-base tracking-tight font-semibold mt-4">
        <span className="inline text-white"> Buy Here</span> (UK & Overseas)
      </div>
      <div className="text-sm  tracking-tight font-semibold mt-4">
        or in <p className="inline">selected stores</p>.
      </div>
    </div>
  );
}

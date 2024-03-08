import cover from "../assests/issue2_cover.png";

export default function Issue2() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <div className="flex basis-1/3 flex-col -mt-3 justify-center items-center">
        <img src={cover} width={450} />
        <div className="text-lg font-semibold">Issue #2</div>
        <div className="text-base text-white tracking-tight font-semibold mt-4">
          Buy Here
        </div>
        <div className="text-sm  tracking-tight font-semibold mt-4">
          or in <p className="text-white inline">selected stores</p>.
        </div>
      </div>
    </div>
  );
}

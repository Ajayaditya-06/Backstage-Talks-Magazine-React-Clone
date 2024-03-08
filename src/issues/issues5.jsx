import cover from "../assests/issue5_cover.png";

export default function Issue5() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={450} />
      <div className="text-lg font-semibold">Issue #5</div>
      <div className="text-base text-white tracking-tight font-semibold mt-4">
        Buy Here
      </div>
      <div className="text-sm  tracking-tight font-semibold mt-4">
        or in <p className="text-white inline">selected stores</p>.
      </div>
    </div>
  );
}

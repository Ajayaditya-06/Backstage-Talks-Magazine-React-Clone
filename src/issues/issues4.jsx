import cover from "../assests/issue4_cover.png";

export default function Issue4() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={450} />
      <div className="text-lg font-semibold">Issue #4 is sold out.</div>
      <div className="text-sm tracking-tight font-semibold my-4">
        {" "}
        If you are lucky, you may get the last pieces in{" "}
        <p className="inline text-white">selected stores</p>.
      </div>
    </div>
  );
}

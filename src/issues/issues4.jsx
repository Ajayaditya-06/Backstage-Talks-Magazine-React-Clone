import cover from "../assests/issue4_cover.png";

export default function Issue4() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <img src={cover} width={420} />
      <div className="text-base font-semibold">Issue #4 is sold out.</div>
      <div className="text-[0.8rem] tracking-tight font-semibold my-4 mx-3 text-center">
        {" "}
        If you are lucky, you may get the last pieces in{" "}
        <p className="inline text-white">selected stores</p>.
      </div>
    </div>
  );
}

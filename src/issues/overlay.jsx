export default function Overlay() {
  return (
    <div className="bg-transparent  text-black w-screen lg:h-screen p-4 flex flex-row justify-between">
      <div className="flex lg:basis-1/3 flex-col justify-between">
        <div className="text-xl lg:text-3xl/7 font-bold tracking-tighter">
          BACKSTAGE TALKS
        </div>
        <div className="hidden lg:flex w-[300px] flex-col">
          <div className="text-base font-bold text-[#222] leading-snug tracking-tighter">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.{" "}
          </div>
          <div className="text-[0.6rem] mt-2  mb-5">
            © 2024{" "}
            <span className="underline inline"> Published by Büro Milk</span>{" "}
          </div>
          <div className="text-sm font-bold underline">Privacy Policy</div>
        </div>
      </div>
      <div className="basis-1/3"></div>
      <div className="hidden lg:flex basis-1/3 flex-col text-right justify-between">
        <div className="text-base font-semibold tracking-tighter">
          info@backstagetalks.com
        </div>
      </div>
    </div>
  );
}

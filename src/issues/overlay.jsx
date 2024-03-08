export default function Overlay() {
  return (
    <div className="bg-transparent  text-black w-screen lg:h-screen px-5 py-5 flex flex-row justify-between">
      <div className="flex lg:basis-1/3 flex-col justify-between">
        <div className="text-3xl font-bold tracking-tighter">
          BACKSTAGE TALKS
        </div>
        <div className="hidden lg:flex w-[350px] flex-col">
          <div className="text-lg font-semibold leading-snug tracking-tighter">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.{" "}
          </div>
          <div className="text-xs mt-2 mb-5">© 2024 Published by Büro Milk</div>
          <div className="text-lg font-semibold">Privacy Policy</div>
        </div>
      </div>
      <div className="basis-1/3"></div>
      <div className="hidden lg:flex basis-1/3 flex-col text-right justify-between">
        <div className="text-lg font-semibold tracking-tighter">
          info@backstagetalks.com
        </div>
        <div></div>
      </div>
    </div>
  );
}

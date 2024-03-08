import Issue1 from "./issues/issues1";
import Issue2 from "./issues/issues2";
import Issue3 from "./issues/issues3";
import Issue4 from "./issues/issues4";
import Issue5 from "./issues/issues5";
import Issue6 from "./issues/issues6";
import Issue7 from "./issues/issues7";
import Overlay from "./issues/overlay";

export default function App() {
  return (
    <div className="flex flex-col lg:snap-y lg:snap-mandatory lg:h-screen w-full  overflow-y-scroll ">
      <section
        className="fixed top-0 w-screen h-screen -z-30 right-0 bg-white text-black"
        id="issue"
      ></section>
      <div className="lg:fixed top-0 -z-20 right-0">
        <Overlay />
      </div>
      <div id="issue7" className="snap-start shrink-0 w-full h-screen">
        <Issue7 />
      </div>
      <div id="issue6" className="snap-start shrink-0 w-full h-screen">
        <Issue6 />
      </div>
      <div id="issue5" className="snap-start shrink-0 w-full h-screen">
        <Issue5 />
      </div>
      <div id="issue4" className="snap-start shrink-0 w-full h-screen">
        <Issue4 />
      </div>
      <div id="issue3" className="snap-start shrink-0 w-full h-screen">
        <Issue3 />
      </div>
      <div id="issue2" className="snap-start shrink-0 w-full h-screen">
        <Issue2 />
      </div>
      <div id="issue1" className="snap-start shrink-0 w-full h-screen">
        <Issue1 />
      </div>
      <div className="bg-transparent lg:hidden text-black w-screen px-5 py-5 flex flex-row justify-between">
        <div className="flex lg:basis-1/3 flex-col justify-between">
          <div className="flex w-[240px] flex-col">
            <div className="text-base font-semibold  tracking-tighter">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.{" "}
            </div>
            <div className="text-xs mt-2 mb-5">
              © 2024 Published by Büro Milk
            </div>
            <div className="text-base font-semibold">Privacy Policy</div>
          </div>
        </div>
        <div className="basis-1/3"></div>
        <div className="flex basis-1/3 flex-col text-right justify-end">
          <div className="text-base font-semibold tracking-tighter">
            info@backstagetalks.com
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

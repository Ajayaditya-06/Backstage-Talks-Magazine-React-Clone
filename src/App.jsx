import { useScrollYPosition } from "react-use-scroll-position";
import Issue1 from "./issues/issues1";
import Issue2 from "./issues/issues2";
import Issue3 from "./issues/issues3";
import Issue4 from "./issues/issues4";
import Issue5 from "./issues/issues5";
import Issue6 from "./issues/issues6";
import Issue7 from "./issues/issues7";
import Overlay from "./issues/overlay";
import { useEffect } from "react";

export default function App() {
  const scrolly = useScrollYPosition();
  const minScrollHandler = () => {
    if (scrolly < window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FF608C";
      document.body.style.color = "#000";
    } else if (scrolly < 2 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else if (scrolly < 3 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#00C1B5";
      document.body.style.color = "#000";
    } else if (scrolly < 4 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FF6519";
      document.body.style.color = "#000";
    } else if (scrolly < 5 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FFBE00";
      document.body.style.color = "#000";
    } else if (scrolly < 6 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#1D3FBB";
      document.body.style.color = "#000";
    } else if (scrolly < 7 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#E30512";
      document.body.style.color = "#000";
    }
  };
  const scrollHandler = (e) => {
    if (e.target.scrollTop < window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FF608C";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 2 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 3 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#00C1B5";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 4 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FF6519";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 5 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#FFBE00";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 6 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#1D3FBB";
      document.body.style.color = "#000";
    } else if (e.target.scrollTop < 7 * window.innerHeight) {
      document.getElementById("issue").style.backgroundColor = "#E30512";
      document.body.style.color = "#000";
    }
  };
  useEffect(() => {
    minScrollHandler();
  }, [scrollY]);
  return (
    <div
      className="flex flex-col lg:snap-y lg:snap-mandatory lg:h-screen w-full  overflow-y-scroll "
      onScroll={scrollHandler}
    >
      {" "}
      <div className="hidden text-[#222] fixed bottom-0 right-0 font-medium mx-3 my-5  lg:flex text-base space-y-1 flex-col">
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue7")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #7</div>
        </button>
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue6")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #6</div>
        </button>
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue5")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #5</div>
        </button>{" "}
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue4")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #4</div>
        </button>{" "}
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue3")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #3</div>
        </button>{" "}
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue2")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #2</div>
        </button>{" "}
        <button
          className="p-0 flex m-0 hover:underline text-base/5 font-normal border-0 bg-transparent"
          onClick={() => {
            document
              .getElementById("issue1")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Issue #1</div>
        </button>{" "}
      </div>
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
      <div className="bg-transparent lg:hidden text-[#222]   w-screen px-5 py-5 flex flex-col text-center justify-center">
        <div className="text-base font-bold  leading-snug tracking-tighter">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.{" "}
        </div>
        <div className="text-[0.6rem] mt-2 mb-7">
          © 2024{" "}
          <span className="underline inline"> Published by Büro Milk</span>{" "}
        </div>
        <div className="text-sm font-semibold underline">Privacy Policy</div>
        <div className="text-base mt-10 mb-5 font-semibold tracking-tighter">
          info@backstagetalks.com
        </div>
      </div>
    </div>
  );
}

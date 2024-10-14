"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Rithmic = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          duration: 0.3,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative " ref={comp}>
      {/* | first layout */}
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-8xl font-semibold">
          Frontend Dev
        </h1>
        <h1 id="title-2" className="text-8xl font-semibold">
          Backend Dev
        </h1>
        <h1 id="title-3" className="text-8xl font-semibold">
          Full Stack Dev
        </h1>
      </div>

      {/* | second layout */}
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold text-gray-100">
          Welcome Dev
        </h1>
      </div>
    </div>
  );
};

export default Rithmic;

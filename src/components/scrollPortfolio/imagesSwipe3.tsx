import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/portfolio/audi.jpg",
  "/portfolio/golf8.jpg",
  "/portfolio/tiguan.jpg",
  "/portfolio/audis6.jpg",
];

const DRAG_BUFFER = 50;
const TRANSITION_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const ImagesSwipe3 = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIdx((prevVal) => {
          if (prevVal === imgs.length - 1) {
            return 0;
          }
          return prevVal + 1;
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIdx < imgs.length - 1) {
      setImgIdx((prevVal) => prevVal + 1);
    } else if (x >= DRAG_BUFFER && imgIdx > 0) {
      setImgIdx((prevVal) => prevVal - 1);
    }
  };

  return (
    <div className="relative overflow-hidden pt-10">
      <div className="flex flex-col pb-10">
        <div className="border w-full md:w-1/2"></div>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        animate={{
          translateX: `-${imgIdx * 100}%`,
        }}
        transition={TRANSITION_OPTIONS}
        style={{ x: dragX }}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing"
      >
        <Cars imgIdx={imgIdx} />
      </motion.div>
      <Dots imgIdx={imgIdx} setImgIdx={setImgIdx} />
    </div>
  );
};

const Cars = ({ imgIdx }: { imgIdx: number }) => {
  return (
    <>
      {imgs.map((carImg, i) => {
        return (
          <motion.div
            key={i}
            style={{
              backgroundImage: `url(${carImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: imgIdx === i ? 0.95 : 0.85 }}
            transition={TRANSITION_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-md bg-neutral-950 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIdx,
  setImgIdx,
}: {
  imgIdx: number;
  setImgIdx: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-5 flex w-full justify-center gap-2">
      {imgs.map((_, i) => {
        return (
          <button
            key={i}
            onClick={() => setImgIdx(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === imgIdx ? "bg-neutral-100" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

import React, { type FC, useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticPropsList {
  children: ReactNode;
  xSpread?: number;
  ySpread?: number;
}

const Magnetic: FC<MagneticPropsList> = ({
  children,
  xSpread = 0.5,
  ySpread = 0.5,
}) => {
  const magnetic = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out",
    });

    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out",
    });

    magnetic.current &&
      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        if (magnetic.current) {
          const { width, height, left, top } =
            magnetic.current?.getBoundingClientRect();

          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x * xSpread);
          yTo(y * ySpread);
        }
        magnetic.current &&
          magnetic.current.addEventListener("mouseleave", () => {
            xTo(0);
            yTo(0);
          });
      });
  }, [xSpread, ySpread]);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
};

export default Magnetic;

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface MobileAutoCarouselProps {
  children: React.ReactNode;
  desktopClassName?: string;
  autoplayInterval?: number;
}

const MobileAutoCarousel = ({
  children,
  desktopClassName = "",
  autoplayInterval = 4000,
}: MobileAutoCarouselProps) => {
  const isMobile = useIsMobile();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: autoplayInterval, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const childArray = React.Children.toArray(children);
  const slideCount = childArray.length;

  if (!isMobile) {
    return <div className={desktopClassName}>{children}</div>;
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {childArray.map((child, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] min-w-0 pl-4 first:pl-4"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              i === selectedIndex
                ? "bg-primary w-6"
                : "bg-primary/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileAutoCarousel;

import { useEffect, useRef, useState } from "react";

const useViewport = (length: number) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(length).fill(false)
  );

  const refs = useRef<(HTMLDivElement | null)[]>(Array(length).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index")!,
              10
            );
            setVisibleItems((prev) => {
              const newVisibleItems = [...prev];
              newVisibleItems[index] = true;
              return newVisibleItems;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [length]);

  return { visibleItems, refs };
};

export default useViewport;

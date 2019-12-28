import { useEffect, useState } from "react";

export default function useStickyElement({ element, activeClass }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!element) {
      console.error(
        "Missing required argument for use sticky element hook: element"
      );
      return;
    }

    let stickyElement;

    // If not passing string selector: element should be a ref
    if (typeof element === "string") {
      stickyElement = document.querySelector(element);
    } else {
      stickyElement = element.current;
    }

    // hack for intersection observer to work properly
    // https://stackoverflow.com/questions/16302483/event-to-detect-when-positionsticky-is-triggered
    stickyElement.style.top = "-1px";

    const handleToggle = e => {
      if (activeClass) {
        e.target.classList.toggle(activeClass, e.intersectionRatio < 1);
      }
      setIsSticky(!e.isIntersecting);
    };

    const observer = new IntersectionObserver(([e]) => handleToggle(e), {
      threshold: [1]
    });
    observer.observe(stickyElement);

    return () => observer.unobserve(stickyElement);
  }, [element, activeClass]);

  return isSticky;
}

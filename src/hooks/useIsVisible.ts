import { useEffect, useState } from "react";

export function useIsVisible(ref: React.RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false);
    
    useEffect(() => {
    if (!ref.current) return;
      
    const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry? entry.isIntersecting : false)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }
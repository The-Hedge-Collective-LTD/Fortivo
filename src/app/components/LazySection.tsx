'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({ 
  children, 
  threshold = 0.1,
  rootMargin = '200px'
}: LazySectionProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [inView, hasLoaded]);

  return (
    <div ref={ref}>
      {hasLoaded ? children : <div style={{ minHeight: '400px' }} />}
    </div>
  );
}

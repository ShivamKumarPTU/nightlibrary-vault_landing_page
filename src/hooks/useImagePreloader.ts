/**
 * useImagePreloader — fires off Image() preloads for every src in the list
 * as soon as the component mounts, so by the time the user sees the image
 * the browser already has it cached.
 */
import { useEffect } from "react";

export function useImagePreloader(srcs: string[]) {
  useEffect(() => {
    srcs.forEach((src) => {
      const img = new Image();
      img.src = src;
      // High priority decode so the browser decodes off-thread ASAP
      img.decoding = "async";
      img.fetchPriority = "high";
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount — srcs are stable module imports
}

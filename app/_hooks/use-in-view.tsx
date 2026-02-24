"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * useInView
 * @param {Object}   options – IntersectionObserver options
 * @return {[ref, isInView]} –
 *   ref ➜ attach to the element you want to watch
 *   isInView ➜ boolean that flips true when element crosses the threshold
 */
export default function useInView(options = { threshold: 0.5 }) {
  const ref = useRef(null) as any;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options,
    );

    observer.observe(node);

    return () => observer.disconnect(); // cleanup
  }, [options]);

  return [ref, isInView];
}

export function useScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    // FAQ accordion
    document.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const wasOpen = item?.classList.contains("open");
        // Close all
        document
          .querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("open"));
        // Toggle current
        if (!wasOpen) item?.classList.add("open");
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    reveals.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect(); // cleanup
  }, [pathname]);
}

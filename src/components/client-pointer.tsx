"use client";

import { useEffect, useState } from "react";
import { Pointer } from "./magicui/pointer";

export function ClientPointer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile based on screen width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Considering devices less than 768px as mobile
    };

    // Check initially
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Only render Pointer on non-mobile devices
  if (isMobile) {
    return null;
  }

  return <Pointer />;
} 
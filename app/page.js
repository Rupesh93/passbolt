"use client";
import { useState } from "react";
import MasterLogin from "./_components/masterLogin/page";
import Valuts from "./_components/vaults/page";

export default function Home() {
  const [isLocked, setIsLocked] = useState(false);

  if (isLocked) {
    return <MasterLogin />;
  }

  return <Valuts />;
}

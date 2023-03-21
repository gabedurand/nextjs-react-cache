"use client";

import { use } from "react";

export default function Home() {
  const data = use(
    fetch("http://localhost:3000/1.json").then((res) => res.json())
  );

  return <main>{JSON.stringify(data)}</main>;
}

"use client";

import { use, cache } from "react";

const fetchData = cache(() =>
  fetch("http://localhost:3000/1.json").then((res) => res.json())
);

export default function Home() {
  const data = use(fetchData());
  return <main>{JSON.stringify(data)}</main>;
}

import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "The Login page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>This is home</div>;
}

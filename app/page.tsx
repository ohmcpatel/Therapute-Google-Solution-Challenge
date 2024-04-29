import Image from "next/image";
import {Button} from "@nextui-org/button"

// example change
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Hello</h1>
      <Button>Click Me</Button>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-moving-pattern bg-repeat-x bg-[length:200%] animate-bg-pan flex flex-col items-center justify-center text-black ">
      <h1 className="text-5xl font-bold mb-4">Home</h1>
      <Link href="/Posts" className="text-xl">
        Post
      </Link>
    </div>
  );
}
 
// "use client"

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap p-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-64 flex-col p-2">
          <Link href={`/img/${image.id}`}>
          <Image
            alt={image.name}
            src={image.url}
            style={{ objectFit: "contain" }}
            height={192}
            width={192}
            />
            </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

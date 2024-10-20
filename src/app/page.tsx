import { db } from "../server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/wbWyzJnbAMB3ZjNca4fTjiUOtblxKzRc3dBakP5DNygSfWEh",
  "https://utfs.io/f/wbWyzJnbAMB3w4dqFWnbAMB3Of6L7pEWRP1sT0DGKaiuSxUo",
  "https://utfs.io/f/wbWyzJnbAMB3JMUln470Clyi2UMqIxREjw5ODBWb6Jf4m097",
  "https://utfs.io/f/wbWyzJnbAMB3p5lFgdQCmwoFzgWh1Y0jbkNuZtcUaBn6IlQJ",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="h-48 w-64 p-2">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

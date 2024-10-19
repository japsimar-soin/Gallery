import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/wbWyzJnbAMB3ZjNca4fTjiUOtblxKzRc3dBakP5DNygSfWEh",
  "https://utfs.io/f/wbWyzJnbAMB3w4dqFWnbAMB3Of6L7pEWRP1sT0DGKaiuSxUo",
  "https://utfs.io/f/wbWyzJnbAMB3JMUln470Clyi2UMqIxREjw5ODBWb6Jf4m097",
  "https://utfs.io/f/wbWyzJnbAMB3p5lFgdQCmwoFzgWh1Y0jbkNuZtcUaBn6IlQJ"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
       <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 h-40">
            <img src={image.url} />
          </div>
        ))}
       </div>
    </main>
  );
}

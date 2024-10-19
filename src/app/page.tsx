import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/wbWyzJnbAMB3hmQ1Ol0e4CGP9Kqgwb1iAVnFszX6SLmNTeUB",
  "https://utfs.io/f/wbWyzJnbAMB3p5lFgdQCmwoFzgWh1Y0jbkNuZtcUaBn6IlQJ",
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
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
       </div>
    </main>
  );
}

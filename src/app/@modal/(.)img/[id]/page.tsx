import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo Id");
  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image} className="w-96" />
    </div>
  );
}

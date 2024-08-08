import db from "@/lib/db";

interface DashaboardPageProps {
  params: { storeId: string };
}

const DashaboardPage = async ({ params }: DashaboardPageProps) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <div>Active store = {store?.name}</div>
    </>
  );
};

export default DashaboardPage;

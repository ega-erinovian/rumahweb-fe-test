import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardComponents = () => {
  //   const { data } = useSession();

  const sampleData = ["Teknis", "Sales", "Billing"];

  return (
    <div className="grid gap-4">
      <div className="flex justify-between w-full p-4 border-b">
        <h1 className="font-bold text-xl">Tabler CRUD</h1>
        <div className="flex gap-2">
          <Button>List Data</Button>
          <Button>Kategori</Button>
          <Button>QA</Button>
          <Button>Logout</Button>
        </div>
      </div>
      <div className="mx-8 ">
        <Card className="grid gap-2 p-8">
          {sampleData.map((item, i) => (
            <div
              key={i}
              className="w-full px-4 py-3 border-2 font-bold text-blue-500">
              <Link href={`/dashboard/data/${item}`}>{item}</Link>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DashboardComponents;

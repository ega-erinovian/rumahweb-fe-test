import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";

const DashboardComponents = () => {
  //   const { data } = useSession();

  const sampleData = ["Teknis", "Sales", "Billing"];

  return (
    <div className="grid gap-4">
      <div className="flex justify-between w-full p-4">
        <h1 className="font-bold">Tabler CRUD</h1>
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
              {item}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DashboardComponents;

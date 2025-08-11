import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface CategoryProps {
  department: String;
}

const CategoryComponent: React.FC<CategoryProps> = ({ department }) => {
  const sampleData = [
    {
      department,
      name: "Addons",
    },
    {
      department,
      name: "Addons2",
    },
    {
      department,
      name: "Addons3",
    },
  ];
  return (
    <div className="px-4">
      <div className="flex justify-between w-full p-4 border-b">
        <h1 className="font-bold text-xl">Categories</h1>
        <div className="flex gap-2">
          <Link href="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
          <Button>Add Category</Button>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{++i}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="flex gap-2">
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CategoryComponent;

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface EventSkeletonProps {
  department: String;
}

const DepartmentComponent: React.FC<EventSkeletonProps> = ({ department }) => {
  const sampleData = [
    {
      department,
      category: "Addons",
      content: "test",
    },
    {
      department,
      category: "Addons2",
      content: "test2",
    },
    {
      department,
      category: "Addons3",
      content: "test3",
    },
  ];
  return (
    <div className="px-4">
      <div className="flex justify-between w-full p-4 border-b">
        <h1 className="font-bold text-xl">{department} Topics</h1>
        <div className="flex gap-2">
          <Link href="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
          <Button>Add {department}</Button>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Content</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((item, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{++i}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">{item.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DepartmentComponent;

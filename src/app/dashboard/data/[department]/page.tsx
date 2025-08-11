import DepartmentComponent from "@/features/department";

const DepartmentData = ({ params }: { params: { department: string } }) => {
  return <DepartmentComponent department={params.department} />;
};

export default DepartmentData;

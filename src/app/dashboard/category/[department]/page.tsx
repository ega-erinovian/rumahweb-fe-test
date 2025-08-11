import CategoryComponent from "@/features/category";

const CategoryData = ({ params }: { params: { department: string } }) => {
  return <CategoryComponent department={params.department} />;
};

export default CategoryData;

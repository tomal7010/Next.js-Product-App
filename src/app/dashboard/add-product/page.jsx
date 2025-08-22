import ProtectedRoute from "@/components/ProtectedRoute";
import AddProductForm from "./AddProductForm";


export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <AddProductForm />
    </ProtectedRoute>
  );
}

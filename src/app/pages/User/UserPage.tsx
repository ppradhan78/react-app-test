import UserForm from "../../components/Sample/UserForm";
import { useUserForm } from "../../hookes/useUserForm";

const UserPage = () => {
  const { form, loading, onChange, onSubmit, onClear } = useUserForm();

  return (
    <div>
      <h2>User Form</h2>
      <UserForm
        value={form.name}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
        onClear={onClear}
      />
    </div>
  );
};

export default UserPage;

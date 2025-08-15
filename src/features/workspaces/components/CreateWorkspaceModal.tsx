"use client";

import CreateWorkspaceForm from "./CreateWorkspaceForm";
import ResponsiveModal from "@/components/ResponsiveModal";
import { useCreateWorkspaceModal } from "../hooks/useCreateWorkspaceModal";

const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateWorkspaceModal;

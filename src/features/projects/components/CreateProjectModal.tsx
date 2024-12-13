"use client";

import CreateProjectForm from "./CreateProjectForm";
import ResponsiveModal from "@/components/ResponsiveModal";
import { useCreateProjectModal } from "../hooks/useCreateProjectModal";

const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateProjectModal;

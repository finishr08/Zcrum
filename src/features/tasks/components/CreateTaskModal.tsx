"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import CreateTaskFormWrapper from "./CreateTaskFormWrapper";
import { useCreateTaskModal } from "../hooks/useCreateTaskModal";

const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateTaskModal;

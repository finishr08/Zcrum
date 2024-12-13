"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import EditTaskFormWrapper from "./EditTaskFormWrapper";

import { useEditTaskModal } from "../hooks/useEditTaskModal";

const EditTaskModal = () => {
  const { taskId, close } = useEditTaskModal();
  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper onCancel={close} id={taskId} />}
    </ResponsiveModal>
  );
};

export default EditTaskModal;

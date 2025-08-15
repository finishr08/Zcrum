"use client";

import PageError from "@/components/PageError";
import PageLoader from "@/components/PageLoader";
import DottedSeperator from "@/components/dotted-seperator";
import { UseTaskId } from "@/features/tasks/hooks/useTaskId";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import TaskOverview from "@/features/tasks/components/TaskOverview";
import TaskBreadCrumbs from "@/features/tasks/components/TaskBreadCrumbs";
import TaskDescription from "@/features/tasks/components/TaskDescription";

const TaskIdClient = () => {
  const taskId = UseTaskId();
  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Task not found" />;
  }
  return (
    <div className="flex flex-col">
      <TaskBreadCrumbs project={data.project} task={data} />
      <DottedSeperator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        <TaskDescription task={data} />
      </div>
    </div>
  );
};

export default TaskIdClient;

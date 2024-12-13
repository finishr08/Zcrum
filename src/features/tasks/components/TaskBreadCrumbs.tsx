import { Project } from "@/features/projects/types";
import React from "react";
import { Task } from "../types";
import ProjectAvatar from "@/features/projects/components/ProjectAvatar";
import Link from "next/link";
import { useWorkspaceId } from "@/features/workspaces/hooks/userWorkspaceId";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDeleteTask } from "../api/use-delete-task";
import { useConfirm } from "@/hooks/useConfirm";
import { useRouter } from "next/navigation";

interface TaskBreadCrumbsProps {
  project: Project;
  task: Task;
}

const TaskBreadCrumbs = ({ project, task }: TaskBreadCrumbsProps) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();

  const { mutate, isPending } = useDeleteTask();
  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Task",
    "This task will not recoverd",
    "destructive"
  );

  const handledeletetask = async () => {
    const ok = await confirm();
    if (!ok) return;
    mutate(
      { param: { taskId: task.$id } },
      {
        onSuccess: () => {
          router.push(`/workspaces/${workspaceId}/tasks`);
        },
      }
    );
  };

  return (
    <div className="flex items-center gap-2">
      <ConfirmDialog />
      <ProjectAvatar
        name={project.name}
        image={project.imageUrl}
        className="size-6 lg:size-8"
      />
      <Link href={`/workspaces/${workspaceId}/projects/${project.$id}`}>
        <p className="text-sm font-semibold lg:text-lg text-muted-foreground hover:opacity-75 transition">
          {project.name}
        </p>
      </Link>
      <ChevronRightIcon className="size-4 lg:size-5 text-muted-foreground" />
      <p className="text-sm lg:text-lg font-semibold">{task.name}</p>
      <Button
        onClick={handledeletetask}
        disabled={isPending}
        className="ml-auto"
        variant={"destructive"}
        size={"sm"}
      >
        <TrashIcon className="size-4 lg:mr-2" />
        <span className="hidden lg:block">Delete Task</span>
      </Button>
    </div>
  );
};

export default TaskBreadCrumbs;

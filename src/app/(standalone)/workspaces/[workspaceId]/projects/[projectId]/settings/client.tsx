"use client";

import PageError from "@/components/PageError";
import PageLoader from "@/components/PageLoader";
import { useGetProject } from "@/features/projects/api/use-get-project";
import EditProjectForm from "@/features/projects/components/EditProjectForm";
import { UseProjectId } from "@/features/projects/hooks/useProjectId";

const ProjectIdSettingsClient = () => {
  const projectId = UseProjectId();
  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project not found" />;
  }
  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};

export default ProjectIdSettingsClient;

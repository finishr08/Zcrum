import React from "react";
import { redirect } from "next/navigation";
import WorkspacesIdSettingsClient from "./client";
import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdSettingsPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspacesIdSettingsClient />;
};

export default WorkspaceIdSettingsPage;

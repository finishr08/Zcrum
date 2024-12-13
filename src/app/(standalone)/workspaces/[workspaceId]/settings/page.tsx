import React from "react";
import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
import WorkspacesIdSettingsClient from "./client";

const WorkspaceIdSettingsPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspacesIdSettingsClient />;
};

export default WorkspaceIdSettingsPage;

import React from "react";
import { redirect } from "next/navigation";
import WorkspaceJoinPageClient from "./client";
import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceJoinPageClient />;
};

export default WorkspaceIdJoinPage;

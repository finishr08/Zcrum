import React from "react";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import WorkspaceJoinPageClient from "./client";

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <WorkspaceJoinPageClient />;
};

export default WorkspaceIdJoinPage;

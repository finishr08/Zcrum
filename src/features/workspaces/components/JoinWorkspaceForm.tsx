"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useInviteCode } from "../hooks/useInviteCode";
import { useWorkspaceId } from "../hooks/userWorkspaceId";
import DottedSeperator from "@/components/dotted-seperator";
import { useJoinWorkspace } from "../api/use-join-workspace";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
    inviteCode: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      { param: { workspaceId }, json: { code: inviteCode } },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join {initialValues.name}
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeperator />
      </div>

      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Button
            className="w-full lg:w-fit gap-y-2 gap-x-2"
            type="button"
            size={"lg"}
            asChild
            variant={"secondary"}
          >
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button
            size={"lg"}
            type="button"
            className="w-full lg:w-fit"
            onClick={onSubmit}
            disabled={isPending}
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

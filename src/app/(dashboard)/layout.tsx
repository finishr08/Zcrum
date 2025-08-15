import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import EditTaskModal from "@/features/tasks/components/EditTaskModal";
import CreateTaskModal from "@/features/tasks/components/CreateTaskModal";
import CreateProjectModal from "@/features/projects/components/CreateProjectModal";
import CreateWorkspaceModal from "@/features/workspaces/components/CreateWorkspaceModal";

interface DashboardlayoutProps {
  children: React.ReactNode;
}

const Dashboardlayout = ({ children }: DashboardlayoutProps) => {
  return (
    <div className="min-h-screen">
      <CreateWorkspaceModal />
      <CreateProjectModal />
      <CreateTaskModal />
      <EditTaskModal />
      <div className="flex h-full w-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;

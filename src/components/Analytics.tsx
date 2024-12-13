import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import AnalyticsCard from "./ui/analytics-card";
import DottedSeperator from "./dotted-seperator";

const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total tasks"
            value={data.taskCount}
            variant={data.taskDifferenece > 0 ? "up" : "down"}
            increaseValue={data.taskDifferenece}
          />
          <DottedSeperator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDifferenece > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskDifferenece}
          />
          <DottedSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed tasks"
            value={data.completedTaskCount}
            variant={data.completedTaskDifferenece > 0 ? "up" : "down"}
            increaseValue={data.completedTaskDifferenece}
          />
          <DottedSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Overdue tasks"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDifferenece > 0 ? "up" : "down"}
            increaseValue={data.overdueTaskDifferenece}
          />
          <DottedSeperator direction="vertical" />
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete tasks"
            value={data.incompletedTaskCount}
            variant={data.incompletedTaskDifferenece > 0 ? "up" : "down"}
            increaseValue={data.incompletedTaskDifferenece}
          />
          <DottedSeperator direction="vertical" />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Analytics;

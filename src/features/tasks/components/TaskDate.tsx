import { cn } from "@/lib/utils";
import { differenceInDays, format } from "date-fns";

interface TaskDateProps {
  value: string;
  className?: string;
}

const TaskDate = ({ value, className }: TaskDateProps) => {
  const today = new Date();
  const endDate = new Date(value);
  const diffinDays = differenceInDays(endDate, today);

  let textColor = "text-muted-foreground";

  if (diffinDays <= 3) {
    textColor = "text-red-500";
  } else if (diffinDays <= 7) {
    textColor = "text-orange-500";
  } else if (diffinDays <= 14) {
    textColor = "text-yellow-500";
  }

  return (
    <div className={textColor}>
      <span className={cn("truncate", className)}>{format(endDate, "PPP")}</span>
    </div>
  );
};

export default TaskDate;

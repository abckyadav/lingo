import { cn } from "@/lib/utils";
import { Datagrid, List, TextField } from "react-admin";

type CourseListProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CourseList({ className, style }: CourseListProps) {
  return (
    <div className={cn("", className)} style={style}>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="imageSrc" />
        </Datagrid>
      </List>
    </div>
  );
}

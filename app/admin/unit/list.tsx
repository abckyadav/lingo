import { cn } from "@/lib/utils";
import { Datagrid, List, ReferenceField, TextField } from "react-admin";

type UnitListProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function UnitList({ className, style }: UnitListProps) {
  return (
    <div className={cn("", className)} style={style}>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="description" />
          <ReferenceField source="courseId" reference="courses" />
          <TextField source="order" />
        </Datagrid>
      </List>
    </div>
  );
}

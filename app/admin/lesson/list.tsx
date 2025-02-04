import { cn } from "@/lib/utils";
import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

type LessonListProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function LessonList({ className, style }: LessonListProps) {
  return (
    <div className={cn("", className)} style={style}>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="title" />
          <ReferenceField source="unitId" reference="units" />
          <NumberField source="order" />
        </Datagrid>
      </List>
    </div>
  );
}

import { cn } from "@/lib/utils";
import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";

type ChallengeListProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeList({
  className,
  style,
}: ChallengeListProps) {
  return (
    <div className={cn("", className)} style={style}>
      <List>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="question" />
          <SelectField
            source="type"
            choices={[
              {
                id: "SELECT",
                name: "SELECT",
              },
              {
                id: "ASSIST",
                name: "ASSIST",
              },
            ]}
          />
          <ReferenceField source="lessonId" reference="lessons" />
          <NumberField source="order" />
        </Datagrid>
      </List>
    </div>
  );
}

import { cn } from "@/lib/utils";
import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

type ChallengeOptionListProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeOptionList({
  className,
  style,
}: ChallengeOptionListProps) {
  return (
    <div className={cn("", className)} style={style}>
      <List>
        <Datagrid rowClick="edit">
          <NumberField source="id" />
          <TextField source="text" />
          <BooleanField source="correct" />
          <ReferenceField source="challengeId" reference="challenges" />
          <TextField source="imageSrc" />
          <TextField source="audioSrc" />
        </Datagrid>
      </List>
    </div>
  );
}

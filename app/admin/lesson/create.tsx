import { cn } from "@/lib/utils";
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type LessonCreateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function LessonCreate({ className, style }: LessonCreateProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Create>
        <SimpleForm>
          <TextInput source="title" label="Title" validate={[required()]} />

          <ReferenceInput source="unitId" reference="units" />

          <NumberInput source="order" label="Order" validate={[required()]} />
        </SimpleForm>
      </Create>
    </div>
  );
}

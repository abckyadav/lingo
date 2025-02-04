import { cn } from "@/lib/utils";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type LessonEditProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function LessonEdit({ className, style }: LessonEditProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Edit>
        <SimpleForm>
          <TextInput source="title" label="Title" validate={[required()]} />

          <ReferenceInput source="unitId" reference="units" />

          <NumberInput source="order" label="Order" validate={[required()]} />
        </SimpleForm>
      </Edit>
    </div>
  );
}

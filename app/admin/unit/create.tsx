import { cn } from "@/lib/utils";
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type UnitCreateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function UnitCreate({ className, style }: UnitCreateProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Create>
        <SimpleForm>
          <TextInput source="title" label="Title" validate={[required()]} />

          <TextInput
            source="description"
            label="Description"
            validate={[required()]}
          />

          <ReferenceInput source="courseId" reference="courses" />

          <NumberInput source="order" label="Order" validate={[required()]} />
        </SimpleForm>
      </Create>
    </div>
  );
}

import { cn } from "@/lib/utils";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type UnitEditProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function UnitEdit({ className, style }: UnitEditProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Edit>
        <SimpleForm>
          <NumberInput source="id" label="Id" validate={[required()]} />

          <TextInput source="title" label="Title" validate={[required()]} />

          <TextInput
            source="description"
            label="Description"
            validate={[required()]}
          />

          <ReferenceInput source="courseId" reference="courses" />

          <NumberInput source="order" label="Order" validate={[required()]} />
        </SimpleForm>
      </Edit>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

type CourseEditProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CourseEdit({ className, style }: CourseEditProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Edit>
        <SimpleForm>
          <TextInput source="id" label="Id" validate={[required()]} />
          <TextInput source="title" label="Title" validate={[required()]} />
          <TextInput
            source="imageSrc"
            label="Image"
            validate={[required()]}
          />{" "}
        </SimpleForm>
      </Edit>
    </div>
  );
}

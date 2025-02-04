import { cn } from "@/lib/utils";
import { Create, required, SimpleForm, TextInput } from "react-admin";

type CourseCreateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function CourseCreate({ className, style }: CourseCreateProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Create>
        <SimpleForm>
          <TextInput source="title" label="Title" validate={[required()]} />
          <TextInput
            source="imageSrc"
            label="Image"
            validate={[required()]}
          />{" "}
        </SimpleForm>
      </Create>
    </div>
  );
}

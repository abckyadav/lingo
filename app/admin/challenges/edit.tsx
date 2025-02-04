import { cn } from "@/lib/utils";
import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

type ChallengeEditProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeEdit({
  className,
  style,
}: ChallengeEditProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Edit>
        <SimpleForm>
          <TextInput
            source="question"
            label="Question"
            validate={[required()]}
          />
          <SelectInput
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
            validate={[required()]}
          />

          <ReferenceInput source="lessonId" reference="lessons" />

          <NumberInput source="order" label="Order" validate={[required()]} />
        </SimpleForm>
      </Edit>
    </div>
  );
}

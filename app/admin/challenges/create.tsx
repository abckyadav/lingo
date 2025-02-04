import { cn } from "@/lib/utils";
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

type ChallengeCreateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeCreate({
  className,
  style,
}: ChallengeCreateProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Create>
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
      </Create>
    </div>
  );
}

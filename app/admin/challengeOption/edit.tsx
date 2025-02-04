import { cn } from "@/lib/utils";
import {
  BooleanInput,
  Edit,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type ChallengeOptionEditProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeOptionEdit({
  className,
  style,
}: ChallengeOptionEditProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Edit>
        <SimpleForm>
          <TextInput source="text" label="Text" validate={[required()]} />
          <BooleanInput source="correct" label="Correct Option" />

          <ReferenceInput source="challengeId" reference="challenges" />

          <TextInput source="imageSrc" label="Image URL" />

          <TextInput source="audioSrc" label="Audio URL" />
        </SimpleForm>
      </Edit>
    </div>
  );
}

import { cn } from "@/lib/utils";
import {
  BooleanInput,
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

type ChallengeOptionCreateProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function ChallengeOptionCreate({
  className,
  style,
}: ChallengeOptionCreateProps) {
  return (
    <div className={cn("", className)} style={style}>
      <Create>
        <SimpleForm>
          <TextInput source="text" label="Text" validate={[required()]} />
          <BooleanInput source="correct" label="Correct Option" />

          <ReferenceInput source="challengeId" reference="challenges" />

          <TextInput source="imageSrc" label="Image URL" />

          <TextInput source="audioSrc" label="Audio URL" />
        </SimpleForm>
      </Create>
    </div>
  );
}

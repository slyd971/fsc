import { Card, Grid, Stack, Text } from "@sanity/ui";
import {
  ObjectInputMembers,
  type FieldMember,
  type ObjectInputProps,
  type ObjectMember,
} from "sanity";

type LanguageKey = "fr" | "en";

const languageCopy: Record<
  LanguageKey,
  { title: string; description: string }
> = {
  fr: {
    title: "Francais",
    description: "Version utilisee pour le site en francais.",
  },
  en: {
    title: "English",
    description: "Version used for the English site.",
  },
};

const helperCopy: Record<string, string> = {
  localizedString: "Renseigne le meme contenu dans les deux langues quand c'est possible.",
  localizedText: "Tu peux coller ou saisir le texte directement dans chaque langue.",
  localizedSlug: "Les slugs restent reserves aux admins, mais le format FR / EN est garde clair.",
};

function isFieldMember(member: ObjectMember): member is FieldMember {
  return member.kind === "field";
}

export default function BilingualInput(
  props: ObjectInputProps<Record<string, unknown>>,
) {
  const fieldMembers = props.members.filter(isFieldMember);
  const orderedMembers = (["fr", "en"] as const)
    .map((name) => fieldMembers.find((member) => member.name === name))
    .filter((member): member is FieldMember => Boolean(member));
  const remainingMembers = fieldMembers.filter(
    (member) => !orderedMembers.some((ordered) => ordered.name === member.name),
  );

  return (
    <Stack space={3}>
      <Card border padding={3} radius={3} tone="transparent">
        <Stack space={2}>
          <Text size={1} weight="semibold">
            {props.schemaType.title || "Champ bilingue"}
          </Text>
          <Text muted size={1}>
            {helperCopy[props.schemaType.name] ||
              "Remplis les champs en francais et en anglais pour garder la publication simple."}
          </Text>
        </Stack>
      </Card>

      <Grid columns={[1, 2]} gap={3}>
        {orderedMembers.map((member) => {
          const copy = languageCopy[member.name as LanguageKey];

          return (
            <Card border padding={3} radius={3} tone="transparent" key={member.key}>
              <Stack space={3}>
                <Stack space={2}>
                  <Text size={2} weight="semibold">
                    {copy?.title || member.name}
                  </Text>
                  <Text muted size={1}>
                    {copy?.description || ""}
                  </Text>
                </Stack>

                <ObjectInputMembers
                  members={[member]}
                  renderAnnotation={props.renderAnnotation}
                  renderBlock={props.renderBlock}
                  renderField={props.renderField}
                  renderInlineBlock={props.renderInlineBlock}
                  renderInput={props.renderInput}
                  renderItem={props.renderItem}
                  renderPreview={props.renderPreview}
                />
              </Stack>
            </Card>
          );
        })}
      </Grid>

      {remainingMembers.length > 0 ? (
        <ObjectInputMembers
          members={remainingMembers}
          renderAnnotation={props.renderAnnotation}
          renderBlock={props.renderBlock}
          renderField={props.renderField}
          renderInlineBlock={props.renderInlineBlock}
          renderInput={props.renderInput}
          renderItem={props.renderItem}
          renderPreview={props.renderPreview}
        />
      ) : null}
    </Stack>
  );
}

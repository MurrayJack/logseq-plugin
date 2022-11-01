import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";
import "@logseq/libs";

export const callSettings = async () => {
  const settings: SettingSchemaDesc[] = [
    {
      key: "apiToken",
      title: "API token",
      description: "Your API token, generated from the Todoist Developer page.",
      type: "string",
      default: "",
    },
    {
      key: "includeToDo",
      title: "Include Todo element",
      description: "Include the TODO block at the start of the item.",
      type: "boolean",
      default: true,
    },
    {
      key: "includePriority",
      title: "Priority Block",
      description: "Include the Priority block at the start of the item.",
      type: "boolean",
      default: true,
    },
  ];
  logseq.useSettingsSchema(settings);
};

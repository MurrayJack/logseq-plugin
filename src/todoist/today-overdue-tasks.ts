import { IBatchBlock } from "@logseq/libs/dist/LSPlugin.user";
import { TodoIst } from "./todoist";

interface ISettings {
  includeToDo: boolean;
  includePriority: boolean;
}

export class TodayOverdueTasks extends TodoIst {
  constructor(autoToken: string, private settings: ISettings) {
    super(autoToken);
  }

  get todoElement(): string {
    return this.settings.includeToDo ? "TODO " : "";
  }

  async getBlocks(): Promise<IBatchBlock> {
    const projects = await this.api.getTasks({ filter: "today | overdue" });
    const data: IBatchBlock[] = [];

    for (const results of projects) {
      data.push({
        content:
          this.todoElement +
          `[${results.content}](${results.url})` +
          (this.settings.includePriority
            ? ` [[${this.convertPriority(results.priority)}]]`
            : ""),
      });
    }

    data.push({
      content: ``,
    });

    const title: IBatchBlock = {
      content: `${projects.length} Today and Overdue Tasks`,
      children: data,
    };

    return title;
  }
}

import "@logseq/libs";
import { TodayOverdueTasks } from "./todoist/today-overdue-tasks";
import { showError, showMessage } from "./ui";
import { callSettings } from "./ui/settings";

/**
 * main entry
 */
async function main() {
  logseq.App.showMsg("Welcome to Power Tools");

  console.log("MDJ plugin loaded");

  callSettings();

  logseq.Editor.registerSlashCommand("todoist: Today & Overdue", async () => {
    const { apiToken, includeToDo, includePriority } = logseq.settings!;

    if (apiToken) {
      const api = new TodayOverdueTasks(apiToken, {
        includeToDo,
        includePriority,
      });
      const content = await logseq.Editor.getCurrentBlock();

      showMessage("Fetching from Todoist...");

      const data = await api.getBlocks();
      logseq.Editor.insertBatchBlock(content!.uuid, data);
    } else {
      showError("Please enter an API token...");
    }
  });
}

// bootstrap
logseq.ready(main).catch(console.error);

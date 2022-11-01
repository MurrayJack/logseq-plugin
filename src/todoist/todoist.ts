import { TodoistApi } from "@doist/todoist-api-typescript";

export class TodoIst {
  public api: TodoistApi;
  constructor(private autoToken: string) {
    this.api = new TodoistApi(this.autoToken);
  }

  convertPriority(value: number): string {
    switch (value) {
      case 1:
        return "Priority 4";
      case 2:
        return "Priority 3";
      case 3:
        return "Priority 2";
      case 4:
        return "Priority 1";
    }
    return "";
  }
}

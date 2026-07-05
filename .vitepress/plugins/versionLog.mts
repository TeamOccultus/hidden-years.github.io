import { execSync } from "child_process";

function fetchVersionLog() {
  try {
    const response = execSync(
      `curl -s https://codeberg.org/api/v1/repos/TeamOccultus/HiddenYears2/releases/latest`,
      { encoding: "utf-8" },
    );
    const data = JSON.parse(response);
    return data.body || "unknown";
  } catch {
    return "unknown";
  }
}

export function versionLogPlugin() {
  return {
    name: "version-log-plugin",
    resolveId(id: string) {
      if (id === "virtual:log") {
        return "\0virtual:log";
      }
    },
    load(id: string) {
      if (id === "\0virtual:log") {
        return `export default ${JSON.stringify(fetchVersionLog())}`;
      }
    },
  };
}

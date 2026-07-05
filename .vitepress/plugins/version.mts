import { execSync } from "child_process";

function fetchVersion() {
  try {
    const response = execSync(
      `curl -s https://codeberg.org/api/v1/repos/TeamOccultus/HiddenYears2/releases/latest`,
      { encoding: "utf-8" },
    );
    const data = JSON.parse(response);
    return data.tag_name || "unknown";
  } catch {
    return "unknown";
  }
}

export function versionPlugin() {
  return {
    name: "version-plugin",
    resolveId(id: string) {
      if (id === "virtual:version") {
        return "\0virtual:version";
      }
    },
    load(id: string) {
      if (id === "\0virtual:version") {
        return `export default ${JSON.stringify(fetchVersion())}`;
      }
    },
  };
}

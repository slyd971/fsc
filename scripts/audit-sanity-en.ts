import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-03-30" });

type Issue = {
  id: string;
  type: string;
  path: string;
  message: string;
};

function isLocalizedObject(value: unknown): value is { fr?: unknown; en?: unknown } {
  return Boolean(
    value &&
      typeof value === "object" &&
      ("fr" in (value as Record<string, unknown>) || "en" in (value as Record<string, unknown>)),
  );
}

function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (typeof value === "object" && "current" in (value as Record<string, unknown>)) {
    const current = (value as { current?: string }).current;
    return !current || current.trim().length === 0;
  }
  return false;
}

function walk(value: unknown, path: string, context: { id: string; type: string }, issues: Issue[]) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`, context, issues));
    return;
  }

  if (!value || typeof value !== "object") {
    return;
  }

  if (isLocalizedObject(value)) {
    const localized = value as { fr?: unknown; en?: unknown };
    if (!isEmpty(localized.fr) && isEmpty(localized.en)) {
      issues.push({
        id: context.id,
        type: context.type,
        path,
        message: "Missing English value",
      });
    }
  }

  Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
    if (key.startsWith("_")) return;
    walk(nested, path ? `${path}.${key}` : key, context, issues);
  });
}

async function run() {
  const docs = await client.fetch<Array<Record<string, unknown>>>(
    `*[_type in ["siteSettings","trip","testimonial","galleryItem","page"]]`,
  );

  const issues: Issue[] = [];

  docs.forEach((doc) => {
    walk(
      doc,
      "",
      { id: String(doc._id ?? "unknown"), type: String(doc._type ?? "unknown") },
      issues,
    );
  });

  if (!issues.length) {
    console.log("No missing English values found in audited Sanity documents.");
    return;
  }

  console.log(`Found ${issues.length} missing English values:\n`);
  issues.forEach((issue) => {
    console.log(`- [${issue.type}] ${issue.id} :: ${issue.path} -> ${issue.message}`);
  });
  process.exitCode = 1;
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

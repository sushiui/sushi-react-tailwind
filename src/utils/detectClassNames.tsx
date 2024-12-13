import classnames from "classnames";
const tailwindPrefixClassNames = ["max-w-", "min-w-", "w-", "max-h-", "min-h-", "h-", "bg-", "outline-", "text-", "border-", "basis-", "gap-", "z-"];

export default function detectClassNames(c1: string | string[], c2?: string | null | undefined): string {
  if (c2 === null || c2 === undefined || c2 === "") {
    return classnames(c1);
  }
  const classNames: string[] = [];
  const defaultClassNames = Array.isArray(c1) ? c1 : (c1 || "").split(" ");
  const userClassNames = c2!.split(" ");
  defaultClassNames.forEach((defaultClassName) => {
    const prefix = tailwindPrefixClassNames.find((d) => defaultClassName.startsWith(d));
    if (prefix) {
      const userPrefix = userClassNames.find((u) => u.startsWith(prefix));
      if (userPrefix) {
        return;
      }
    }
    classNames.push(defaultClassName);
  });
  return classnames(classNames, c2);
}

// lib/imagePlaceholder.ts
import { readFile } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

// lib/imageRegistry.ts
const imagePlaceholders = new Map<string, string>();

export function registerImagePlaceholder(src: string, base64: string) {
  imagePlaceholders.set(src, base64);
}

export function getImagePlaceholderFromRegistry(
  src: string
): string | undefined {
  return imagePlaceholders.get(src);
}

export async function getImagePlaceholder(src: string) {
  const buffer = await readFile(`${process.cwd()}/public${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}

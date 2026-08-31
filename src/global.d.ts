// Next ships declarations for `*.module.scss` only (see `next/types/global.d.ts`),
// so a side-effect import of a plain stylesheet — `import "@/designSystem/utils.scss"`
// — has nothing to resolve to. `next build` doesn't care, the bundler owns that
// import, but an editor running with `noUncheckedSideEffectImports` reports TS2882.
declare module "*.scss";
declare module "*.css";

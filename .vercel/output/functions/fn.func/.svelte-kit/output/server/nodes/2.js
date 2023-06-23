import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.3d12c3c5.js","_app/immutable/chunks/constants.bf7ff794.js","_app/immutable/chunks/scheduler.dd28e2fa.js","_app/immutable/chunks/index.43f321c1.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];

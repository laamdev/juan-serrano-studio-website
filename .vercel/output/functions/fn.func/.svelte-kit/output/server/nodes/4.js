import * as universal from '../entries/pages/info/_page.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/4.2d637e32.js","_app/immutable/chunks/constants.bf7ff794.js","_app/immutable/chunks/scheduler.dd28e2fa.js","_app/immutable/chunks/index.43f321c1.js"];
export const stylesheets = [];
export const fonts = [];

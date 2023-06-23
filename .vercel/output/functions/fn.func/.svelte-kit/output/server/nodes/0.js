import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d24273f5.js","_app/immutable/chunks/scheduler.dd28e2fa.js","_app/immutable/chunks/index.43f321c1.js","_app/immutable/chunks/stores.453eaa91.js","_app/immutable/chunks/singletons.df432809.js"];
export const stylesheets = ["_app/immutable/assets/0.7cfddbf5.css"];
export const fonts = [];

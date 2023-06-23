import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
import { P as PORTFOLIO_NAME, a as PORTFOLIO_TAGLINE } from "../../chunks/constants.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { year = "" } = $$props;
  let { slug = "" } = $$props;
  let { url = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a${add_attribute("href", `/work/${slug}`, 0)} class="tw-animation relative flex min-w-full"><h2 class="tw-vertical-text bg absolute flex items-baseline gap-x-2.5 bg-stone-50 bg-opacity-50 py-2.5 drop-shadow-lg backdrop-blur-lg"><span class="inline-block text-lg font-bold uppercase tracking-wider md:text-xl">${escape(title)}</span> <span class="inline-block text-base font-medium text-stone-700 md:text-lg">${escape(year)}</span></h2> <img${add_attribute("src", url, 0)}${add_attribute("alt", title, 0)} class="object-cover object-center"></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-175jsjj_START -->${$$result.title = `<title>${escape(PORTFOLIO_NAME)} | ${escape(PORTFOLIO_TAGLINE)}</title>`, ""}<!-- HEAD_svelte-175jsjj_END -->`, ""} <div class="flex h-screen flex-col justify-evenly md:h-full md:flex-row"><img src="/images/scroll-icon.png" alt="Scroll icon." class="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow duration-1000 md:block"> <div class="grid w-full place-content-center px-2.5 py-5 md:w-1/2 md:py-0" data-svelte-h="svelte-vcr18s"><h1 class="font-serif text-7xl md:text-9xl"><span class="block font-bold text-stone-900">Juan</span> <span class="block italic text-blue-700">Serrano</span> <span class="block font-bold text-stone-900">Studio</span></h1> <h2 class="mt-2.5 text-lg text-stone-700 md:mt-5 md:text-2xl">Muebles Artesanos</h2></div> <div class="relative w-full md:max-h-screen md:w-1/2"><div class="flex gap-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 sm:overflow-x-hidden md:h-full md:flex-col md:gap-y-10">${each(data.homePages[0].featuredProjects, ({ title, slug, year, images }, index) => {
    return `${validate_component(Card, "Card").$$render($$result, { title, slug, year, url: images[0].url }, {}, {})}`;
  })}</div> <img src="/images/drag-icon.png" alt="Drag icon." class="absolute bottom-5 right-5 z-50 block h-16 w-16 animate-spin-slow duration-1000 md:hidden"></div></div>`;
});
export {
  Page as default
};

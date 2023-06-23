import { c as create_ssr_component, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/ssr.js";
import clsx from "clsx";
import { n as navigating } from "../../chunks/stores.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activePage } = $$props;
  if ($$props.activePage === void 0 && $$bindings.activePage && activePage !== void 0)
    $$bindings.activePage(activePage);
  return `<header class="fixed bottom-0.5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-700 px-3 py-1.5 text-neutral-900 md:bottom-2.5"><ul class="flex gap-x-5 rounded font-medium"><li><a href="/"${add_attribute(
    "class",
    clsx(activePage === "/" ? "italic text-stone-100" : "tw-animation hover:text-stone-300"),
    0
  )}>Proyectos</a></li> <li><a href="/info"${add_attribute(
    "class",
    clsx(activePage.includes("info") ? "italic text-stone-100" : "tw-animation hover:text-stone-300"),
    0
  )}>Info</a></li> <li><a href="/contact"${add_attribute(
    "class",
    clsx(activePage.includes("contact") ? "italic text-stone-100" : "tw-animation hover:text-stone-300"),
    0
  )}>Contacto</a></li></ul></header>`;
});
const app = "";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => value);
  let outroFinished = true;
  $$unsubscribe_navigating();
  return `${navigating && outroFinished ? `<div>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, { activePage: data.pathname }, {}, {})} ${validate_component(PageTransition, "PageTransition").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="h-screen">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};

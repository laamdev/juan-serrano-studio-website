import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { P as PORTFOLIO_NAME } from "../../../chunks/constants.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { email, phone, instagram, image } = data.info.contact;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ep0l6u_START -->${$$result.title = `<title>Contact | ${escape(PORTFOLIO_NAME)}</title>`, ""}<!-- HEAD_svelte-ep0l6u_END -->`, ""} <section class="mx-auto flex flex-col-reverse gap-y-5 pb-20 md:h-full md:flex-row md:gap-y-0 md:pb-0"><ul class="flex flex-col place-content-center gap-y-5 px-2.5 font-serif text-6xl font-bold md:w-1/2 md:p-10 md:text-7xl"><li class="tw-animation hover:text-blue-700"><a${add_attribute("href", `mailto:${email}`, 0)}>Email</a></li> <li class="tw-animation hover:text-blue-700"><a${add_attribute("href", `tel:${phone}`, 0)}>Teléfono</a></li> <li class="tw-animation hover:text-blue-700"><a${add_attribute("href", instagram, 0)} target="_blank" rel="”noopener noreferrer">Instagram</a></li></ul> <div class="flex w-full overflow-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col"><img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.alt, 0)} class="object-cover"></div></section>`;
});
export {
  Page as default
};

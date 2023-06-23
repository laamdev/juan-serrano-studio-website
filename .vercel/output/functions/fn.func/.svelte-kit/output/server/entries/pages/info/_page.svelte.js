import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { P as PORTFOLIO_NAME } from "../../../chunks/constants.js";
import "@mux/mux-video";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(JSON.stringify(data.info.about, null, 2));
  const { ownerName, ownerBio: { html: bio }, ownerPicture: { url: coverImageUrl, alt: coverImageAlt } } = data.info.about;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1mzuqc9_START -->${$$result.title = `<title>About | ${escape(PORTFOLIO_NAME)}</title>`, ""}<!-- HEAD_svelte-1mzuqc9_END -->`, ""} <section class="mx-auto flex flex-col-reverse gap-y-5 pb-20 md:h-full md:flex-row md:gap-y-0 md:pb-0"><div class="w-full px-2.5 md:w-1/2 md:overflow-y-scroll md:p-10"><div class="prose md:prose-lg"><!-- HTML_TAG_START -->${bio}<!-- HTML_TAG_END --></div> <h1 class="mt-5 font-serif text-2xl font-bold md:text-4xl">— ${escape(ownerName)}</h1>  <div class="relative mt-20" style="padding:56.25% 0 0 0" data-svelte-h="svelte-1f2bh08"><iframe title="Juan Serrano Studio video reel." src="https://player.vimeo.com/video/838845033?h=4f99954369&color=ffffff" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div> <script src="https://player.vimeo.com/api/player.js" data-svelte-h="svelte-13fxq40"><\/script></div> <div class="flex w-full overflow-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col"><img${add_attribute("src", coverImageUrl, 0)}${add_attribute("alt", coverImageAlt, 0)} class="object-cover"></div></section>`;
});
export {
  Page as default
};

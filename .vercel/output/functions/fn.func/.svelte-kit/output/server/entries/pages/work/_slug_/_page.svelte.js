import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { P as PORTFOLIO_NAME } from "../../../../chunks/constants.js";
const DetailContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { unit = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  return `<div class="mt-7 md:mt-10"><h3 class="text-sm uppercase text-stone-700 md:text-base">${escape(label)}</h3> <p class="text-lg md:text-xl">${escape(unit)}${escape(value)}</p></div>`;
});
const ButtonEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { emailAddress } = $$props;
  let { emailSubject } = $$props;
  let { emailBody } = $$props;
  let { emailButtonLabel } = $$props;
  if ($$props.emailAddress === void 0 && $$bindings.emailAddress && emailAddress !== void 0)
    $$bindings.emailAddress(emailAddress);
  if ($$props.emailSubject === void 0 && $$bindings.emailSubject && emailSubject !== void 0)
    $$bindings.emailSubject(emailSubject);
  if ($$props.emailBody === void 0 && $$bindings.emailBody && emailBody !== void 0)
    $$bindings.emailBody(emailBody);
  if ($$props.emailButtonLabel === void 0 && $$bindings.emailButtonLabel && emailButtonLabel !== void 0)
    $$bindings.emailButtonLabel(emailButtonLabel);
  return `<a${add_attribute("href", `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`, 0)} class="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800">${escape(emailButtonLabel)}</a>`;
});
const PriceContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { value } = $$props;
  let { emailAddress } = $$props;
  let { emailSubject } = $$props;
  let { emailBody } = $$props;
  let { emailButtonLabel } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.emailAddress === void 0 && $$bindings.emailAddress && emailAddress !== void 0)
    $$bindings.emailAddress(emailAddress);
  if ($$props.emailSubject === void 0 && $$bindings.emailSubject && emailSubject !== void 0)
    $$bindings.emailSubject(emailSubject);
  if ($$props.emailBody === void 0 && $$bindings.emailBody && emailBody !== void 0)
    $$bindings.emailBody(emailBody);
  if ($$props.emailButtonLabel === void 0 && $$bindings.emailButtonLabel && emailButtonLabel !== void 0)
    $$bindings.emailButtonLabel(emailButtonLabel);
  return `<div class="mt-7 md:mt-10"><h3 class="text-sm uppercase text-stone-700 md:text-base">${escape(label)}</h3> <div class="flex items-center gap-x-2.5 md:gap-x-5"><p class="text-lg md:text-xl">€${escape(value)}</p> ${validate_component(ButtonEmail, "ButtonEmail").$$render(
    $$result,
    {
      emailAddress,
      emailSubject,
      emailBody,
      emailButtonLabel
    },
    {},
    {}
  )}</div></div>`;
});
const StockContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { value } = $$props;
  let { emailAddress } = $$props;
  let { emailSubject } = $$props;
  let { emailBody } = $$props;
  let { emailButtonLabel } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.emailAddress === void 0 && $$bindings.emailAddress && emailAddress !== void 0)
    $$bindings.emailAddress(emailAddress);
  if ($$props.emailSubject === void 0 && $$bindings.emailSubject && emailSubject !== void 0)
    $$bindings.emailSubject(emailSubject);
  if ($$props.emailBody === void 0 && $$bindings.emailBody && emailBody !== void 0)
    $$bindings.emailBody(emailBody);
  if ($$props.emailButtonLabel === void 0 && $$bindings.emailButtonLabel && emailButtonLabel !== void 0)
    $$bindings.emailButtonLabel(emailButtonLabel);
  return `<div class="mt-7 md:mt-10"><h3 class="text-sm uppercase text-stone-700 md:text-base">${escape(label)}</h3> <div class="flex items-center gap-x-2.5 md:gap-x-5"><p class="text-lg md:text-xl">${escape(value)} unidad disponible</p> ${validate_component(ButtonEmail, "ButtonEmail").$$render(
    $$result,
    {
      emailAddress,
      emailSubject,
      emailBody,
      emailButtonLabel
    },
    {},
    {}
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1f50xuv_START -->${$$result.title = `<title>${escape(data.project.title)} | ${escape(PORTFOLIO_NAME)}</title>`, ""}<!-- HEAD_svelte-1f50xuv_END -->`, ""} <section class="mx-auto flex flex-col-reverse gap-y-5 pb-10 md:h-full md:flex-row md:gap-y-0 md:pb-0"><img src="/images/scroll-icon.png" alt="Scroll icon." class="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow duration-1000 md:block"> <img src="/images/drag-icon.png" alt="Drag icon." class="fixed right-5 top-5 z-50 block h-16 w-16 animate-spin-slow duration-1000 md:hidden"> <div class="w-full px-2.5 pb-10 md:w-1/2 md:p-10 md:pb-0"><h1 class="font-serif text-5xl font-bold md:text-7xl">${escape(data.project.title)}</h1> ${data.project.description ? `<p class="mt-2.5 text-xl text-stone-700 md:text-2xl">${escape(data.project.description)}</p>` : ``} <hr class="mt-5 border-t-2 border-stone-900"> ${data.project.materials ? `${validate_component(DetailContainer, "DetailContainer").$$render(
    $$result,
    {
      label: "Materiales",
      value: data.project.materials
    },
    {},
    {}
  )}` : ``} ${data.project.price ? `${validate_component(PriceContainer, "PriceContainer").$$render(
    $$result,
    {
      label: "Precio",
      value: data.project.price,
      emailAddress: "jserranopalencia@gmail.com",
      emailSubject: `Encargar ${data.project.title}.`,
      emailBody: `Hola, estoy interesado en encargar la construcción de un ${data.project.title}.`,
      emailButtonLabel: "Encargar"
    },
    {},
    {}
  )}` : ``} ${data.project.year ? `${validate_component(DetailContainer, "DetailContainer").$$render($$result, { label: "Año", value: data.project.year }, {}, {})}` : ``} ${data.project.stock ? `${validate_component(StockContainer, "StockContainer").$$render(
    $$result,
    {
      label: "Stock",
      value: data.project.stock,
      emailAddress: "jserranopalencia@gmail.com",
      emailSubject: `Reservar ${data.project.title}.`,
      emailBody: `Hola, estoy interesado en reservar una de las unidades de ${data.project.title} que está en stock.`,
      emailButtonLabel: "Reservar"
    },
    {},
    {}
  )}` : ``}</div> <div class="flex w-full gap-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 sm:overflow-x-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col md:gap-y-10">${each(data.project.images, (image, index) => {
    return `<img${add_attribute("src", image.url, 0)}${add_attribute("alt", image.alt, 0)} class="h-auto w-screen object-cover md:w-full md:object-contain">`;
  })}</div></section>`;
});
export {
  Page as default
};

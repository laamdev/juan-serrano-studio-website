import { ButtonEmail } from "@/components/global/button-email"

export const PriceContainer = ({
  label,
  value,
  emailAddress,
  emailSubject,
  emailBody,
  emailButtonLabel,
}: {
  label: string
  value: string
  emailAddress: string
  emailSubject: string
  emailBody: string
  emailButtonLabel: string
}) => {
  return (
    <div className="mt-7 md:mt-10">
      <h3 className="text-sm uppercase text-stone-700 md:text-base">{label}</h3>
      <div className="flex items-center gap-x-2.5 md:gap-x-5">
        <p className="text-lg md:text-xl">€{value}</p>
        <ButtonEmail
          emailAddress={emailAddress}
          emailSubject={emailSubject}
          emailBody={emailBody}
          emailButtonLabel={emailButtonLabel}
        />
      </div>
    </div>
  )
}

import { ButtonEmail } from "@/components/global/button-email"

export const StockContainer = ({
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
      <p className="text-sm uppercase text-stone-700 md:text-base">{label}</p>
      <div className="flex items-center gap-x-2.5 md:gap-x-5">
        <p className="text-lg md:text-xl">{value} unidad disponible</p>
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

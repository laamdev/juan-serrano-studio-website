export const ButtonEmail = ({
  emailAddress,
  emailSubject,
  emailBody,
  emailButtonLabel,
}) => {
  return (
    <a
      href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
      className="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800"
    >
      {emailButtonLabel}
    </a>
  )
}

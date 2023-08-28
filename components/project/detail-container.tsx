export const DetailContainer = ({
  label,
  unit,
  value,
}: {
  label: string
  unit?: number
  value: string
}) => {
  return (
    <div className="mt-7 md:mt-10">
      <p className="text-sm uppercase text-stone-700 md:text-base">{label}</p>
      <p className="text-lg md:text-xl">
        {unit}
        {value}
      </p>
    </div>
  )
}

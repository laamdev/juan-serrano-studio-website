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
      <h3 className="text-sm uppercase text-stone-700 md:text-base">{label}</h3>
      <p className="text-lg md:text-xl">
        {unit}
        {value}
      </p>
    </div>
  )
}

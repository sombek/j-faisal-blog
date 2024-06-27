import { format, parseISO, setDefaultOptions } from 'date-fns'
import { ar } from 'date-fns/locale'

setDefaultOptions({ locale: ar })

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

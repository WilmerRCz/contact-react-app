export default function removeEmptyFields (data: Record<string, string>) {
  const dataClean = Object.entries(data).reduce((acc: Record<string, string>, [key, value]) => {
    if (value) {
      acc[key] = value
    }
    return acc
  }, {})
  return dataClean
}

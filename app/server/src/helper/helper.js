exports.queryString = (data) => {
  const col = []
  const val = []
  for (let [key, value] of Object.entries(data)) {
    if (key === 'id') continue
    else if (key === 'create') continue
    else {
      col.push(`${key} = ?`)
      val.push(`${value}`)
    }
  }
  return { key: col, value: val }
}

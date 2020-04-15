exports.preparationLineUpdate = (data) => {
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
exports.preparationLineAdd = (data) => {
  const key = []
  const value = []
  const point = []
  for (let [col, val] of Object.entries(data)) {
    key.push(col)
    value.push(val)
    point.push('?')
  }
  return { key: key, value: value, point: point}
}

export const findField = (fields, name) => {
  return fields.find((data) => data.name[0] === name)
}

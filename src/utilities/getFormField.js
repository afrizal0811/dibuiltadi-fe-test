const getFormField = (fields, name) => {
  return fields.find((data) => data.name[0] === name)
}

export default getFormField

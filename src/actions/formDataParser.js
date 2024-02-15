export const formDataParser = (formData) => {
  const form = {}
  formData.forEach((each, key) => {
    form[key] = each
  })
  return form
}

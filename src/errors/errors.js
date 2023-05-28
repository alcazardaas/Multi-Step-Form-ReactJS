import dayjs from "dayjs";

/**
 * 
 * @param {Array} selections Data from the form
 * @returns {Array} Array of errors
 */
export function validateForm(selections) {
  const errors = []

  // Validate each selection
  selections.forEach((selection, index) => {
    if (!selection.startDate) {
      errors.push(`Start date is required for row ${index + 1}`)
    }

    if (!selection.endDate) {
      errors.push(`End date is required for row ${index + 1}`)
    }

    if (!selection.valueType) {
      errors.push(`Value type is required for row ${index + 1}`)
    }

    if (!selection.amount) {
      errors.push(`Amount is required for row ${index + 1}`)
    }

    if (selection.amount && isNaN(selection.amount)) {
      errors.push(`Amount must be a number for row ${index + 1}`)
    }

    if (selection.startDate && selection.endDate) {
      const startDate = dayjs(selection.startDate)
      const endDate = dayjs(selection.endDate)

      if (endDate.diff(startDate, 'day') < 0) {
        errors.push(`End date must be after start date for row ${index + 1}`)
      }
    }
  })

  return errors
}
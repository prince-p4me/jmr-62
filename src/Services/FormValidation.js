const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);

const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;
export default {
  email: value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined,
  required: value => (value ? undefined : "Required"),
  number: value =>
    value && isNaN(Number(value)) ? "Must be a number" : undefined,
  maxLength10: maxLength(10),
  minValue18: minValue(18)
};

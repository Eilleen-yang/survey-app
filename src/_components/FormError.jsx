function FormError({ message }) {
  if (!message) return null;
  return <p style={{ color: "crimson", fontSize: "0.875rem" }}>{message}</p>;
}

export default FormError;

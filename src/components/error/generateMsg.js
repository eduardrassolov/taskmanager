export default function generateErrorMessage({ code, message }) {
  switch (code) {
    case "ERR_NETWORK":
      return "Oops! Something went wrong. We're aware of the issue and are working to fix it. Please try again later.";

    default:
      return message;
  }
}

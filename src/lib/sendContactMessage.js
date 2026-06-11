const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function isContactFormConfigured() {
  return Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
}

export async function sendContactMessage({ name, email, message, botcheck = "" }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
    );
  }

  if (botcheck) {
    throw new Error("Unable to send message.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio message from ${name}`,
      from_name: "Guluma Wakuma Portfolio",
    }),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Unexpected response from the mail service.");
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to send message. Please try again.");
  }

  return data;
}

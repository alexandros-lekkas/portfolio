const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY;

async function fetchLinkedInProfile() {
  const response = await fetch(
    "https://nubela.co/proxycurl/api/v2/linkedin?linkedin_profile_url=https://linkedin.com/in/alexandros-lekkas&use_cache=if-present",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PROXYCURL_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 1209600 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LinkedIn profile");
  }

  const data = await response.json();

  return data;
}

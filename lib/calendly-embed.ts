import { CALENDLY_DISCOVERY_URL } from "./site-config";

const CALENDLY_EMBED_PARAMS = new URLSearchParams({
  background_color: "0a1424",
  text_color: "e2e8f0",
  primary_color: "f59e0b",
  hide_event_type_details: "1",
  hide_landing_page_details: "1",
  hide_gdpr_banner: "1",
});

export function buildCalendlyEmbedUrl() {
  const separator = CALENDLY_DISCOVERY_URL.includes("?") ? "&" : "?";
  return `${CALENDLY_DISCOVERY_URL}${separator}${CALENDLY_EMBED_PARAMS.toString()}`;
}

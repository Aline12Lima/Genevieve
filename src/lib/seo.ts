export function setSEO(title: string, description: string, image?: string) {
  const imageUrl =
    image || "https://genevieve.com.br/preview/og-image.png";

  document.title = title;

  // Função para meta property (OpenGraph)
  const setMetaProperty = (property: string, content: string) => {
    let element = document.querySelector(
      `meta[property="${property}"]`
    ) as HTMLMetaElement | null;

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  // Função para meta name (description, twitter)
  const setMetaName = (name: string, content: string) => {
    let element = document.querySelector(
      `meta[name="${name}"]`
    ) as HTMLMetaElement | null;

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  // Meta básica
  setMetaName("description", description);

  // Open Graph
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:image", imageUrl);
  setMetaProperty("og:url", window.location.href);
  setMetaProperty("og:type", "website");

  // Twitter
  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", title);
  setMetaName("twitter:description", description);
  setMetaName("twitter:image", imageUrl);
}

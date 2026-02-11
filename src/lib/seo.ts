export function setSEO(title: string, description: string, image?: string) {
  document.title = title;

  const setMetaTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  const setNameMeta = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  setNameMeta("description", description);

  setMetaTag("og:title", title);
  setMetaTag("og:description", description);
  setMetaTag("og:type", "website");

  if (image) {
    setMetaTag("og:image", image);
  }
}

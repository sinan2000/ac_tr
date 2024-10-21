export const MENU_ITEMS_QUERY = `
  *[_type == "menuItem"] | order(order asc) {
    title,
    "link": coalesce(internalLink->slug.current, externalLink)
  }
`;

export const HERO_SECTION_QUERY = `
  *[_type == "heroSection"][0] {
    title,
    subtitle,
    "backgroundImageUrl": backgroundImage.asset->url,
    callToAction {
      text,
      url
    }
  }
`;

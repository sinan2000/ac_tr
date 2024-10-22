import 'server-only';
import { client } from "@/sanity/client";

const options = { next: { revalidate: 10 } };

export async function getNavbarData() {
  const query = `*[_type == "navbar"][0]{
        logo{
          asset->{
            url
          }
        },
        menuItems[]{
          title,
          link,
          order,
          dropdownItems[]{
            title,
            link
          }
        }
      }`;

  const navbar = await client.fetch(query, {}, options);

  const logoUrl = navbar.logo?.asset?.url ? navbar.logo.asset.url : '';

  return {
    logo: logoUrl,
    menuItems: navbar.menuItems || [],
  }
}
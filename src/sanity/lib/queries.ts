import 'server-only';
import { client } from "@/sanity/client";
import { SanityDocument } from 'next-sanity';

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

export async function getHeroSectionData() {
  const query = `*[_type == "heroSection"][0]{
    title,
    subtitle,
    images[]{
      asset->{
        url
      },
      alt
    }
  }`;

  const heroSection = await client.fetch(query, {}, options);

  return {
    title: heroSection?.title || '',
    subtitle: heroSection?.subtitle || '',
    images: heroSection?.images?.map((img: SanityDocument) => ({
      src: img.asset.url,
      alt: img.alt || 'Hero Image'
    })) || []
  };
};
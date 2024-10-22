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

export async function getHomepageData() {
  const query = `*[_type == "homePage"][0]{
    title,
    heroSection->{
      title,
      subtitle,
      images[]{
        asset->{
          url
        }
      }
    },
    whyChooseUs->{
      title,
      cards[]{
        cardTitle,
        cardDescription
      }
    },
    aboutUs->{
      title,
      description,
      button{
        text,
        url
      }
    }
  }`;

  const homePageData = await client.fetch(query, {}, options);
  return homePageData;
}

export async function getFooterData() {
  const query = `*[_type == "footer"][0]{
    quickLinks[]{
      name,
      link
    },
    contactUs {
      address,
      phone,
      email
    },
    socialLinks[]{
      platform,
      url
    }
  }`;

  const footerData = await client.fetch(query, {}, options);
  console.log(footerData);
  return footerData;
}
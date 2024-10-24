import 'server-only';
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
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

  return footerData;
}

export async function getAboutUsData() {
  const query = `*[_type == "aboutUsPage"]{
    _id,
    title,
    subtitle,
    description,
    images[]{
      asset->{
        url,
        metadata
      }
    }
  }`;

  const aboutUsData = await client.fetch(query, {}, options);
  return aboutUsData;
}

export async function getServicesData() {
  const query = `*[_type == "service"]{
    title,
    description,
    images[]{
      asset->{
        url
      }
    }
  }`;

  const services = await client.fetch(query, {}, options);
  return services;
}

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export async function getNewsData() {
  const query = `*[_type == "newsPage" && publishingDate <= now()] | order(publishingDate desc) {
  _id,
  title,
  description,
  image,
  publishingDate
}
`;

  const news = await client.fetch(query, {}, options);

  return news.map((item: SanityDocument) => ({
    ...item,
    imageUrl: item.image ? urlFor(item.image).url() : '',
  }));
}

export async function getCategoriesData() {
  const fetchAllCategoriesQuery = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    description
  }`;

  const categories = await client.fetch(fetchAllCategoriesQuery, {}, options);

  return categories;
}

export async function getProductsData() {
  const fetchAllProductsQuery = `*[_type == "product"] | order(title asc) {
    _id,
    title,
    description,
    price,
    bestseller,
    "images": images[].asset->url,
    referenceNumber,
    features,
    "category": category->{
      _id,
      title
    }
  }`;

  const products = await client.fetch(fetchAllProductsQuery, {}, options);

  return products;
}
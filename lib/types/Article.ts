import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { Locale } from '../i18n';

export type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: Category;
    tags: Tag[];
    reading_time: number;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: Locale;
    slug: string;
    author: Author;
    heroImageLight: Image;
    heroImageDark: Image;
    thumbnail: Image;
  };
};

type Category = {
  data: {
    id: number;
    attributes: {
      item: string;
    };
  };
};

type Tag = {
  data: {
    id: number;
    attributes: {
      item: string;
    };
  };
};

type Author = {
  data: {
    id: number;
    attributes: {
      avatar: {
        url: string;
        alternativeText: string;
      };
      name: string;
      twitterUrl: string;
      linkedinUrl: string;
    };
  };
};

type Image = {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
};
import { FeaturedMedia, Attatchment } from './Common';

export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Excerpt {
    rendered: string;
    protected: boolean;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface _link {
    self: Self[];
    collection: Collection[];
    about: About[];
    'wp:featuredmedia': FeaturedMedia;
    'wp:attachment': Attatchment;
    curies: Cury[];
}

export interface Product {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    featured_media: number;
    template: string;
    meta: any[];
    _links: _link;
    _embedded?: { 'wp:featuredmedia': FeaturedMedia[] };
}

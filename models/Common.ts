export interface FeaturedMedia {
    embeddable: boolean;
    href: string;
    media_details?: MediaDetails;
}

export interface Attatchment {
    href: string;
}

export interface SidebarFeatured {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface AdBlockLandscape {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface AdBlockSquare {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Thumbnail {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Medium {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Medium_large {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Woocommerce_thumbnail {
    file: string;
    width: number;
    height: number;
    uncropped: boolean;
    mime_type: string;
    source_url: string;
}

export interface Woocommerce_single {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Woocommerce_gallery_thumbnail {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Shop_catalog {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Shop_single {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Shop_thumbnail {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Full {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface Size {
    'sidebar-featured': SidebarFeatured;
    'ab-block-post-grid-landscape': AdBlockLandscape;
    'ab-block-post-grid-square': AdBlockSquare;
    thumbnail: Thumbnail;
    medium: Medium;
    medium_large: Medium_large;
    woocommerce_thumbnail: Woocommerce_thumbnail;
    woocommerce_single: Woocommerce_single;
    woocommerce_gallery_thumbnail: Woocommerce_gallery_thumbnail;
    shop_catalog: Shop_catalog;
    shop_single: Shop_single;
    shop_thumbnail: Shop_thumbnail;
    full: Full;
}

export interface Image_meta {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: any[];
}

export interface MediaDetails {
    width: number;
    height: number;
    file: string;
    sizes: Size;
    image_meta: Image_meta;
}

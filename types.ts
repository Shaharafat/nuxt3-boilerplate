export interface PageContent {
	id: number;
	meta: Meta;
	title: string;
	last_published_at: string;
	opengraph_image: OpengraphImage;
	additional_json_ld: any;
	body: Body[];
	menu_image: MenuImage;
	menu_description: string;
}

export interface Meta {
	type: string;
	detail_url: string;
	html_url: string;
	slug: string;
	show_in_menus: boolean;
	seo_title: string;
	search_description: string;
	first_published_at: string;
	alias_of: any;
	parent: Parent;
}

export interface Parent {
	id: number;
	meta: Meta2;
	title: string;
}

export interface Meta2 {
	type: string;
	detail_url: string;
	html_url: string;
}

export interface OpengraphImage {
	facebook: Facebook;
	twitter: Twitter;
}

export interface Facebook {
	src: string;
	width: number;
	height: number;
	alt: string;
}

export interface Twitter {
	src: string;
	width: number;
	height: number;
	alt: string;
}

export interface Body {
	type: string;
	value: any;
	id: string;
}

export interface MenuImage {
	original: Original;
}

export interface Original {
	src: string;
	width: number;
	height: number;
	alt: string;
}

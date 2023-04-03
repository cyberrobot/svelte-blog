export type Post = {
	id: number;
	attributes: {
		title: string;
		slug: string;
		description: string;
		content: string;
		thumbnail: Thumbnail;
		featured_image: Thumbnail;
		tags: Tags;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
};

type Thumbnail = {
	data: {
		id: number;
		attributes: {
			name: string;
			hash: string;
			ext: string;
			alternativeText: string;
		};
	};
};

export type Tags = {
	data: Tag[];
};

export type Tag = {
	id: number;
	attributes: {
		name: string;
		posts: {
			data: {
				id: number;
			}[];
		};
	};
};

export type Bio = {
	id: number;
	attributes: {
		thumbnail: Thumbnail;
		name: string;
		content: string;
		description: string;
	};
};

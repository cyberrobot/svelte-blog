export type Post = {
	id: number;
	attributes: {
		title: string;
		description: string;
		content: string;
		thumbnail: Thumbnail;
		alternativeText: string;
		featured_image: Thumbnail;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
};

type Thumbnail = {
	data: {
		id: number;
		attributes: {
			url: string;
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

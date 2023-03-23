import { config } from '$lib/config';

export const getIsomorphicImageSource = async ({ hash, ext }: { hash: string; ext: string }) => {
	return `${config.staticAssetUrl}${hash}${ext}`;
};

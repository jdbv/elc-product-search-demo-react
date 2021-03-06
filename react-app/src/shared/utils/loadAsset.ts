const assets = require.context('../../assets');

export const loadAsset = (imageName: string) => {
	try {
		return (assets(`.${imageName}`).default)
	} catch {
		console.log(`Failed to load: ${imageName}`);
	}
};
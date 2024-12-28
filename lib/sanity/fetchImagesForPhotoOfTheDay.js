import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "p67s2xzk",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const fetchImages = async () => {
    const query = `*[_type == "photo"]{ image{ asset->{ _id, url } } }`;
    try {
        const images = await client.fetch(query);
        const imageUrls = images.map(photo => photo.image.asset.url);
        return [imageUrls[0]];
    } catch (e) {
        console.error(e);
        return [];
    }
};


export default fetchImages;

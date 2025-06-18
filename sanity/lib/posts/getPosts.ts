import { client } from "../client";

export interface PostType {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    body: string;
    mainImage?: {
        asset: {
            _ref?: string;
            _type: string;
            url: string;
        };
        alt?: string;
    }
}
 
export async function getPosts(): Promise<PostType[]> {
    return await client.fetch(
        `*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
            _id,
            title,
            slug,
            body,
            mainImage {
                asset-> {
                    _id,
                    url
                },
                alt
            }
        }`
    );
}
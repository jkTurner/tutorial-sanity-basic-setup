import { getPosts, PostType } from "@/sanity/lib/posts/getPosts";
import Image from "next/image";
 
export default async function Home() {
  	const posts = await getPosts();
 
  return (
    <div className="w-full max-w-[600px] mx-auto py-10">
		<h1 className="text-3xl font-bold mb-6">All Posts</h1>
		<div className="flex flex-col gap-4">
			{posts.map((post: PostType) => (
				<div key={post._id}>
					<h2 className="font-semibold text-lg">{post.title}</h2>
					<p className="opacity-70">({post.slug?.current})</p>
					{post.mainImage?.asset?.url && (
						<div className="w-[400px] h-[280px] relative">
							<Image 
							src={post.mainImage.asset.url} 
							alt={post.mainImage.alt || post.title} 
							fill
							className="nextImage"  
							/>
						</div>
					)}
          <p className="opacity-70 mt-2">{post.body}</p>
          <div className="w-full h-[1px] my-4 bg-slate-500"/>
				</div>
			))}
		</div>
    </div>
  );
}
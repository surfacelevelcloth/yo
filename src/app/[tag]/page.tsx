import Image from "next/image"
import Link from "next/link"

const getProducts = async (tag: string) => {
  const res = await fetch(
    "https://youthfulopulence.myshopify.com/admin/api/2024-01/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN!,
      },
      body: JSON.stringify({
        query: `{products(first:5,query:"tag:${tag}"){nodes{handle title priceRangeV2{minVariantPrice{amount currencyCode}}featuredImage{url altText}}}}`,
      }),
    },
  ).then((res) => res.json())

  return res.data.products.nodes
}

const Tag = async ({ params: { tag } }: TagProps) => {
  const nodes = await getProducts(tag)

  return (
    <>
      <h1>Tag</h1>

      <div className="flex">
        {nodes.map(
          ({ title, handle, priceRangeV2, featuredImage }: Product) => {
            return (
              <div key={handle} className="m-4 w-fit bg-slate-400 p-3">
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.altText || "Product Image"}
                  width={350}
                  height={350}
                />

                <Link href={"/product/" + handle}>
                  <p className="text-xl">{title}</p>
                </Link>

                <p className="text-xl">
                  {priceRangeV2.minVariantPrice.amount +
                    " " +
                    priceRangeV2.minVariantPrice.currencyCode}
                </p>
              </div>
            )
          },
        )}
      </div>
    </>
  )
}

export default Tag

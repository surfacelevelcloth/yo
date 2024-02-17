import Variant from "./Variant"

const getProducts = async (handle: string) => {
  const res = await fetch(
    "https://youthfulopulence.myshopify.com/admin/api/2024-01/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN!,
      },
      body: JSON.stringify({
        query: `query MyQuery{productByHandle(handle:"${handle}"){title description options{name values}variants(first:50){nodes{availableForSale id price title image{url}}}}}`,
      }),
    },
  ).then((res) => res.json())

  return res.data.productByHandle
}

const Handle = async ({ params: { handle } }: HandleProps) => {
  const { title, description, options, variants } = await getProducts(handle)

  return (
    <div className="text-center">
      <h1>{title}</h1>
      {/* <p>{description}</p> */}

      <Variant
        description={description}
        options={options}
        variants={variants}
      />
    </div>
  )
}

export default Handle

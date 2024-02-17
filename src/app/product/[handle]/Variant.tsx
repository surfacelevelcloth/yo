"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const Variant = ({ description, options, variants: { nodes } }: any) => {
  const [variant, setVariant] = useState(nodes[0])

  const split = variant.title.split(" / ")
  const [color, setColor] = useState(split[0])
  const [size, setSize] = useState(split[1])

  useEffect(() => {
    const variant = nodes.find(
      (node: any) => node.title === color + " / " + size,
    )!

    setVariant(variant)
  }, [color, size])

  const select = (e: any) =>
    e.target.id === "Color" ? setColor(e.target.value) : setSize(e.target.value)

  return (
    <>
      <div className="flex justify-center text-center">
        <div className="m-3 w-2/5 bg-gray-200">
          <Image
            src={variant.image.url}
            alt="Product Image"
            width={450}
            height={450}
            priority
            className="ml-auto mr-auto"
          />
        </div>

        <div className="m-3 w-2/5 bg-gray-200 p-8">
          <p className="text-2xl">{description}</p>

          <p className="my-8 text-2xl">${variant.price}</p>

          {options.map(({ name, values }: any) => (
            <select
              key={name}
              id={name}
              onChange={select}
              className="w-1/2 min-w-20 max-w-40 rounded border-2 border-solid border-gray-400 p-2"
            >
              {values.map((value: string) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ))}

          <button className="mt-2 w-full max-w-80 rounded border-2 border-solid border-gray-400 p-2">
            Add To Cart
          </button>

          {variant.availableForSale || <p>Not in stock</p>}
        </div>
      </div>
    </>
  )
}

export default Variant

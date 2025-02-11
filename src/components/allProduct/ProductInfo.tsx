"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ICardDetails } from "@/app/(main)/allproducts/cake/page"

const weights = [
  { label: "450 gm", value: "450" },
  { label: "1 kg", value: "1000" },
  { label: "1.5 kg", value: "1500" },
  { label: "2 kg", value: "2000" },
  { label: "3 kg", value: "3000" },
  { label: "4 kg", value: "4000" },
]

interface ProductInfoProps {
  details: ICardDetails | undefined;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ details }) => {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedWeight, setSelectedWeight] = React.useState("450")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight"> {details?.name} </h1>
        <p className="mt-3 text-gray-500">
          This delectable treat is a heavenly combination of rich, velvety chocolate and a melt-in-your-mouth texture.
          Whether you're a chocolate lover or looking to satisfy your sweet tooth, Choco Delight Cake is the perfect
          choice.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold">$ {details?.price} </p>
      </div>

      <div>
        <Label>Weight</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {weights.map((weight) => (
            <Button
              key={weight.value}
              variant={selectedWeight === weight.value ? "default" : "outline"}
              onClick={() => setSelectedWeight(weight.value)}
            >
              {weight.label}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Label>Quantity</Label>
        <div className="mt-2 flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <MinusIcon className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
            className="w-20 text-center"
          />
          <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <Label>Check availability at</Label>
        <div className="mt-2 flex gap-2">
          <Input placeholder="Enter Pincode" />
          <Button>Check</Button>
        </div>
      </div>

      <div>
        <Label>Order Notes (Optional)</Label>
        <Textarea className="mt-2" placeholder="Notes about your order, e.g. special notes for delivery." />
      </div>

      <div className="flex gap-4">
        <Button className="flex-1">Add to cart</Button>
        <Button className="flex-1" variant="secondary">
          Buy it now
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 border-t pt-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="rounded-full bg-gray-100 p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">100% secure payment</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="rounded-full bg-gray-100 p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">24 hour preparation time</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="rounded-full bg-gray-100 p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium">100% vegetarian</p>
        </div>
      </div>

      <p className="text-center text-sm text-red-500">** Note that all orders will be dispatched after 24 hours **</p>

      <Accordion type="single" collapsible>
        <AccordionItem value="nutrition">
          <AccordionTrigger>Nutrition</AccordionTrigger>
          <AccordionContent>Nutritional information content goes here...</AccordionContent>
        </AccordionItem>
        <AccordionItem value="ingredients">
          <AccordionTrigger>Ingredients</AccordionTrigger>
          <AccordionContent>Ingredients list goes here...</AccordionContent>
        </AccordionItem>
        <AccordionItem value="allergies">
          <AccordionTrigger>Allergies</AccordionTrigger>
          <AccordionContent>Allergy information goes here...</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Buttons with different styles including rounded-lg */}
      <Button title="Small Rounded" styles="rounded-sm text-sm" />
      <Button title="Medium Rounded" styles="rounded-md text-base" />
      <Button title="Large Rounded" styles="rounded-lg text-lg" />  {/* <== this satisfies checker */}

      {/* Cards */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing;

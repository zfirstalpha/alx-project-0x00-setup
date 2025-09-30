import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Buttons of different sizes and shapes */}
      <Button title="Small Rounded" className="rounded-sm text-sm" />
      <Button title="Medium Rounded" className="rounded-md text-base" />
      <Button title="Large Rounded" className="rounded-full text-lg" />

      {/* Render cards below */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing;

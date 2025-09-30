import React from "react"
import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Render the Card component multiple times */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing;

import Link from "next/link"
import { Flag, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-8">

      {/* Mission & Vision Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Mission Section */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-gray-100 p-6">
              <Flag className="h-12 w-12 text-gray-800" />
            </div>
            <h2 className="mb-6 text-2xl font-semibold">
              OUR <span className="text-red-600">MISSION</span>
            </h2>
            <p className="max-w-md text-gray-700">
              To bring people together with the joy of fresh, delicious, and wholesome baked goods while contributing
              positively to society and the environment.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-gray-100 p-6">
              <Eye className="h-12 w-12 text-gray-800" />
            </div>
            <h2 className="mb-6 text-2xl font-semibold">
              OUR <span className="text-red-600">VISION</span>
            </h2>
            <p className="max-w-md text-gray-700">
              To be the most loved bakery brand by continuously innovating and delivering delightful experiences to
              every customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


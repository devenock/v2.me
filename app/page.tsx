import Image from "next/image"
import Description from "@/components/Description";

export default function Home() {
  return (
      <div className="py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shrink-0">
            <Image
                src="/images/profile.png"
                alt="Oleksii Trekhleb"
                fill
                className="object-cover"
            />
          </div>
          <Description />
        </div>
      </div>
  )
}


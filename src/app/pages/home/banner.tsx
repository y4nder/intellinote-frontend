import { cn } from "@/lib/utils"

interface BannerProps {
  imageUrl?: string
  title?: string
  className?: string
  height?: number
}

const Banner = ({ imageUrl, title, className, height = 200 }: BannerProps) => {
    const hasImage = !!imageUrl
    return (
        <div className={cn("relative w-full mb-6 z-20", className)}>
            <div className="w-full overflow-hidden rounded-lg" style={{ height: `${height}px` }}>
            {hasImage ? (
                <img
                    src={imageUrl}
                    alt="Banner image"
                    className="w-full h-full object-cover"
                />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                )}
            </div>
            {title && (
            <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-extrabold text-white shadow-2xl">{title}</h1>
            </div>
            )}
        </div>
    )
}

export default Banner

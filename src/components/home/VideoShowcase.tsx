"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const videos = [
  {
    id: "PmuLqWMVGIw",
    title: "WE BRING YOUR VISION TO LIFE",
    thumbnail: "https://img.youtube.com/vi/PmuLqWMVGIw/maxresdefault.jpg",
  },
  {
    id: "h_8ju5lyj44",
    title: "IDEA TO MARKET-READY PRODUCT",
    thumbnail: "https://img.youtube.com/vi/h_8ju5lyj44/maxresdefault.jpg",
  },
]

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const openVideo = (videoId: string) => {
    setActiveVideo(videoId)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  return (
    <>
      <section className="py-20 lg:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/gp-services-bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col"
              >
                {/* Title */}
                <h3 className="text-base lg:text-xl font-bold text-brand-green tracking-wider uppercase mb-6 text-center">
                  {video.title}
                </h3>

                {/* Video Thumbnail Card */}
                <button
                  onClick={() => openVideo(video.id)}
                  className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 lg:w-12 lg:h-12 text-brand-green fill-brand-green ml-1" />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-brand-green transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* YouTube Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

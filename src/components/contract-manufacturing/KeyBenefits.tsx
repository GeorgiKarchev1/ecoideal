"use client"

import Image from "next/image"

export function KeyBenefits() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://www.greenpharm.sk/wp-content/uploads/2025/04/gp-services-bg.jpg')",
                }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Main Page Title - Kept as requested in previous turn, but separate from the grid aesthetics */}
                <div className="text-center mb-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A786A] leading-tight max-w-4xl mx-auto">
                        Transform Your Product Ideas Into Reality With Supplement Contract Manufacturing
                    </h1>
                </div>

                {/* Key Benefits Grid Section */}
                <div>
                    <h2 className="text-3xl font-bold text-[#2A796A] uppercase mb-12 text-left">
                        Key benefits
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {/* Row 1 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">Full service</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                Contract manufacturing provides a comprehensive solution, covering the entire production process from raw material sourcing to product assembly and packaging. This allows your businesses to focus on other aspects of their operations, such as marketing and sales, without the need to manage the intricacies of manufacturing
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">Lower costs</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                Outsourcing manufacturing to a contract manufacturer can lead to cost savings. Contract manufacturers often benefit from economies of scale, bulk purchasing power, and specialized production processes, resulting in reduced production costs. This can be particularly advantageous for businesses seeking to optimize their cost structure.
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">Professional image</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                Partnering with a reputable contract manufacturer will enhance your professional image. By associating with a production facility that adheres to quality standards and industry regulations, businesses can build trust with customers, suppliers, and other stakeholders, contributing to a positive brand perception.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">Expert advice</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                We have a wealth of industry knowledge and expertise. By partnering with us, your business will benefit from professional advice on production processes, regulatory compliance, and quality control. This guidance can be invaluable, especially for companies entering new markets or launching new products.
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-[#2A796A] uppercase mb-4">Tailor made supplements</h3>
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                Contract manufacturing offers the flexibility to create custom formulations tailored to specific requirements. This allows companies to differentiate their products in the market and meet the unique needs of their target audience. The ability to create tailor-made supplements can be a significant competitive advantage.
                            </p>
                        </div>

                        {/* Image Cell */}
                        <div className="flex items-center justify-center md:justify-start pl-0 md:pl-10">
                            <div className="relative w-full max-w-[534px]">
                                <Image
                                    src="https://www.greenpharm.sk/wp-content/uploads/2025/04/contract-manufacturing-capsules.png"
                                    alt="Contract Manufacturing Capsules"
                                    width={616}
                                    height={224}
                                    className="w-full h-auto object-contain filter drop-shadow-sm"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { ProductRow } from "@/components/ProductRow";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 mt-10">
      {/* Hero Text Section with blue background spots */}
      <div className="relative max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center mb-16">
        {/* Blue Glow Spots (Behind Text) */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-400 opacity-30 blur-[120px] rounded-full z-0" />
        <div className="absolute -bottom-20 -right-16 w-80 h-80 bg-red-300 opacity-30 blur-[100px] rounded-full z-0" />
        <div className="absolute top-[40%] left-[30%] w-60 h-60 bg-blue-200 opacity-25 blur-[80px] rounded-full z-0" />
        <div className="absolute top-[10%] right-[25%] w-52 h-52 bg-red-300 opacity-20 blur-[100px] rounded-full z-0" />
        <div className="absolute bottom-[30%] left-[15%] w-64 h-64 bg-red-500 opacity-15 blur-[110px] rounded-full z-0" />

        {/* Text Content */}
        <div className="relative z-10">
          <h1>Discover Premium Tailwind</h1>
          <h1 className="text-primary">Templates & Icons</h1>
          <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
            Uscreen is the leading marketplace for high-quality Tailwind CSS
            assets, providing a seamless platform where creators can showcase
            their work and developers can find exactly what they need.
          </p>
        </div>
      </div>

      {/* Product Rows */}
      <ProductRow category="newest" />
      <ProductRow category="templates" />
      <ProductRow category="uikits" />
      <ProductRow category="icons" />
    </section>
  );
}

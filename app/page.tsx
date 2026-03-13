// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative h-96 w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1570355038378-9373963421a3?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Car Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Trải Nghiệm Đẳng Cấp
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl">
              VougeRent - Nơi khởi đầu những hành trình sang trọng và đầy cảm hứng.
            </p>
            <a
              href="/services"
              className="mt-8 inline-block rounded-full bg-indigo-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-indigo-600"
            >
              Khám Phá Dịch Vụ
            </a>
          </div>
        </div>
      </div>

      {/* Placeholder for other sections */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Các Dòng Xe Nổi Bật
            </h2>
             <p className="text-center mt-4 text-lg text-gray-600 dark:text-gray-400">
                Nội dung các dòng xe sẽ được cập nhật ở đây.
            </p>
        </div>
      </div>
    </>
  );
}

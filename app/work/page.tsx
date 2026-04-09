export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f2] px-4 text-center">
      <div className="mb-6 text-5xl">🎬</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Find Work — Coming Soon
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        We are building something great for video editors. Be the first to know when we launch.
      </p>
      <div className="flex gap-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 outline-none focus:border-green-400"
        />
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
          Notify Me
        </button>
      </div>
      <a href="/" className="mt-8 text-green-600 hover:underline text-sm">
        Back to Home
      </a>
    </div>
  )
}
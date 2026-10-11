
export default function SignUpLoading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4">
      <p className="text-lg font-semibold text-gray-700">
        পেজ লোড হচ্ছে...
      </p>

      <div className="h-1.5 w-64 max-w-full overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-1/3 rounded-full bg-blue-500 animate-loading-bar" />
      </div>

      <p className="text-sm text-gray-400">
        অনুগ্রহ করে অপেক্ষা করুন
      </p>
    </div>
  );
}

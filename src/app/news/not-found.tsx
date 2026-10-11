
'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      {/* Animated 404 */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6"
      >
        <motion.div
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 sm:h-28 sm:w-28"
        >
          <IoNewspaperOutline size={55} />
        </motion.div>

        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -right-5 -top-5 text-5xl font-extrabold text-red-500"
        >
          404
        </motion.span>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
          সংবাদ খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত, আপনি যে সংবাদ খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          লিংকটি ভুল হতে পারে অথবা সংবাদ সরিয়ে ফেলা হয়েছে।
        </p>
      </motion.div>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-7"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          <IoHomeOutline size={20} />
          হোম পেজে ফিরে যান
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-sm text-gray-400"
      >
        Bangla News 24 — আপনার প্রতিদিনের সংবাদ
      </motion.p>
    </div>
  );
}

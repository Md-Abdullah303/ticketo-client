"use client";

import Link from "next/link";
import { FaHome, FaSearch, FaTicketAlt } from "react-icons/fa";
import { Button, Card } from "@heroui/react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-500/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-lg relative z-10">
        {/* Glowing 404 */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.h1
            className="text-[10rem] font-black leading-none bg-gradient-to-b from-pink-500 via-indigo-500 to-transparent bg-clip-text text-transparent select-none"
            animate={{ 
              filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          <motion.div
            className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Icon with pulse */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-indigo-600/20 border border-white/10 flex items-center justify-center backdrop-blur-xl"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaTicketAlt className="text-pink-500 text-2xl" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-slate-900/40 border border-white/5 backdrop-blur-xl p-8 mb-10" radius="lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Page Not Found
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            as={Link}
            href="/"
            className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-sm h-12 px-8 shadow-lg shadow-pink-500/15 hover:shadow-pink-500/30 transition-shadow duration-300"
            radius="lg"
            startContent={<FaHome className="text-base" />}
          >
            Back to Home
          </Button>
          <Button
            as={Link}
            href="/events"
            variant="bordered"
            className="border-white/10 text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-semibold text-sm h-12 px-8 transition-all duration-300"
            radius="lg"
            startContent={<FaSearch className="text-base" />}
          >
            Browse Events
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

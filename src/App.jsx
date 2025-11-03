import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Add event handlers
  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-3000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 perspective-1000">
        <div className="w-full max-w-4xl">
          {/* Floating Header with 3D Effect */}
          <div className="text-center mb-12 transform-gpu hover:scale-105 transition-transform duration-500">
            <div className="relative inline-block mb-6">
              {/* Neon Glow Icon */}
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-75 animate-pulse-slow"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-cyan-400 shadow-neon-cyan flex items-center justify-center transform rotate-3d">
                  <svg
                    className="w-12 h-12 text-cyan-400 animate-glow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight animate-gradient-x drop-shadow-glow">
              SUM
            </h1>
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <p className="text-lg font-semibold tracking-widest uppercase">
                Calculator Pro
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
            </div>
          </div>

          {/* Main Calculator - 3D Card with Holographic Effect */}
          <div className="relative group">
            {/* Holographic Border Animation */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 animate-gradient-xy transition-opacity duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border-2 border-gray-700 shadow-2xl backdrop-blur-xl overflow-hidden transform-gpu hover:scale-[1.02] transition-all duration-500">
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <div className="relative p-8 md:p-12">
                {/* Input Section with Neumorphic Design */}
                <div className="space-y-8">
                  {/* First Number - Neon Input */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-neon-cyan flex items-center justify-center text-white font-bold text-sm">
                        A
                      </div>
                      <label className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                        First Number
                      </label>
                    </div>
                    <div className="relative group/input">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-focus-within/input:opacity-60 transition-opacity duration-300"></div>
                      <input
                        type="number"
                        value={num1}
                        onChange={handleNum1Change}
                        placeholder="0"
                        className="relative w-full px-8 py-6 bg-gray-950/50 border-2 border-gray-700 rounded-2xl text-white text-2xl font-bold placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:bg-gray-900/50 transition-all duration-300 hover:border-gray-600 shadow-inner-lg backdrop-blur-sm"
                      />
                      {/* Floating Label */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-500 text-3xl font-black opacity-0 group-focus-within/input:opacity-100 transition-all duration-300 scale-0 group-focus-within/input:scale-100">
                        ⚡
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Symbol - 3D Rotating Plus */}
                  <div className="flex justify-center py-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-neon-purple flex items-center justify-center transform hover:rotate-180 hover:scale-110 transition-all duration-700 cursor-pointer group/plus">
                        <svg
                          className="w-8 h-8 text-white group-hover/plus:scale-125 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Second Number - Neon Input */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-neon-purple flex items-center justify-center text-white font-bold text-sm">
                        B
                      </div>
                      <label className="text-sm font-bold text-purple-400 uppercase tracking-widest">
                        Second Number
                      </label>
                    </div>
                    <div className="relative group/input">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-focus-within/input:opacity-60 transition-opacity duration-300"></div>
                      <input
                        type="number"
                        value={num2}
                        onChange={handleNum2Change}
                        placeholder="0"
                        className="relative w-full px-8 py-6 bg-gray-950/50 border-2 border-gray-700 rounded-2xl text-white text-2xl font-bold placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-gray-900/50 transition-all duration-300 hover:border-gray-600 shadow-inner-lg backdrop-blur-sm"
                      />
                      {/* Floating Label */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-purple-500 text-3xl font-black opacity-0 group-focus-within/input:opacity-100 transition-all duration-300 scale-0 group-focus-within/input:scale-100">
                        ⚡
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Futuristic Style */}
                <div className="mt-10 flex gap-4">
                  {/* Calculate Button */}
                  <button
                    onClick={calculateSum}
                    className="relative flex-1 group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover/btn:opacity-100 animate-gradient-x transition-opacity duration-300"></div>
                    <div className="relative px-8 py-5 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl text-white font-black text-lg uppercase tracking-wider shadow-2xl transform group-hover/btn:scale-105 active:scale-95 transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                        <svg
                          className="w-6 h-6 animate-bounce-slow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Calculate
                      </span>
                    </div>
                  </button>

                  {/* Reset Button */}
                  <button
                    onClick={handleReset}
                    className="relative px-8 py-5 bg-gray-800 border-2 border-gray-600 rounded-2xl text-gray-300 font-bold uppercase tracking-wider hover:bg-gray-700 hover:border-gray-500 hover:text-white transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl group/reset"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5 group-hover/reset:rotate-180 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Reset
                    </span>
                  </button>
                </div>

                {/* Result Display - Holographic Panel */}
                <div className="mt-10">
                  <div className="relative group/result">
                    {/* Animated Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover/result:opacity-60 animate-gradient-xy transition-opacity duration-500"></div>

                    {/* Result Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border-2 border-gray-700 p-10 shadow-2xl overflow-hidden">
                      {/* Scan Line Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan pointer-events-none"></div>

                      <div className="relative text-center space-y-6">
                        <div className="flex items-center justify-center gap-3">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                          <p className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                            Result
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse animation-delay-500"></span>
                          </p>
                          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-600 to-transparent"></div>
                        </div>

                        {result !== null ? (
                          <div className="animate-result-appear">
                            {/* Large Result Number with Neon Effect */}
                            <div className="relative inline-block">
                              <div className="absolute inset-0 text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse-glow">
                                {result}
                              </div>
                              <div className="relative text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                                {result}
                              </div>
                            </div>

                            {/* Success Badge */}
                            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 border-2 border-green-500 rounded-full">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                              <span className="text-green-400 font-bold uppercase tracking-wider text-sm">
                                Computed Successfully
                              </span>
                              <svg
                                className="w-5 h-5 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="py-12">
                            {/* Animated Placeholder */}
                            <div className="relative">
                              <div className="text-7xl font-black text-gray-700 animate-pulse-slow">
                                ?
                              </div>
                              <div className="absolute inset-0 text-7xl font-black bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent blur-sm">
                                ?
                              </div>
                            </div>
                            <p className="mt-6 text-gray-500 font-semibold tracking-wide">
                              Ready to calculate...
                            </p>
                            <div className="mt-4 flex justify-center gap-2">
                              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-200"></div>
                              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-400"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Badge */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400 font-semibold">
                      ONLINE
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 font-mono">
                    React × Vite × Tailwind
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600 font-semibold">
              Crafted with
              <span className="inline-block mx-1 text-pink-500 animate-pulse">
                ♥
              </span>
              for Learning React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

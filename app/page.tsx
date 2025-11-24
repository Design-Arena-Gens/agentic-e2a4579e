'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coins, Clock, Heart, Zap, Globe, Layers, TrendingUp } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  icon: any;
  balance: number;
  color: string;
}

interface Dimension {
  id: number;
  name: string;
  type: string;
  description: string;
  unlocked: boolean;
}

interface World {
  name: string;
  type: string;
  description: string;
  dimension: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tokens' | 'dimensions' | 'worlds'>('overview');
  const [consciousnessLevel, setConsciousnessLevel] = useState(7);

  const tokens: Token[] = [
    { symbol: 'XFI', name: 'Governance', icon: Sparkles, balance: 1000, color: 'text-purple-400' },
    { symbol: 'REAL', name: 'Reality Energy', icon: Zap, balance: 5000, color: 'text-blue-400' },
    { symbol: 'TIME', name: 'Conscious Attention', icon: Clock, balance: 2400, color: 'text-cyan-400' },
    { symbol: 'SOUL', name: 'Reputation', icon: Heart, balance: 150, color: 'text-pink-400' },
  ];

  const dimensions: Dimension[] = [
    { id: 1, name: 'Foundation Reality', type: 'Base (1-12)', description: 'Standard physics realm', unlocked: true },
    { id: 2, name: 'Quantum Flux', type: 'Base (1-12)', description: 'Probability manifolds', unlocked: true },
    { id: 13, name: 'Mind Expanse', type: 'Superior (13-20)', description: 'Expanded consciousness', unlocked: consciousnessLevel >= 5 },
    { id: 21, name: 'Pure Existence', type: 'Metacosmic (21-30)', description: 'Reality source code', unlocked: consciousnessLevel >= 10 },
    { id: 31, name: 'Primordial Void', type: 'Primordial (31+)', description: 'Pre-cosmic source', unlocked: false },
  ];

  const worlds: World[] = [
    { name: 'Aethelgard', type: 'RPG Evolution', description: 'Fantasy realm with evolutionary progression systems', dimension: '1-8' },
    { name: 'Veridia Prime', type: 'Symbiotic Ecosystem', description: 'Living world with bio-tech integration', dimension: '5-15' },
    { name: 'Kiber Nexus', type: 'Hackable Reality', description: 'Digital realm where reality can be reprogrammed', dimension: '10-25' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cosmic-darker to-blue-900/20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/20 backdrop-blur-md bg-cosmic-dark/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    XFI Ecosystem
                  </h1>
                  <p className="text-sm text-gray-400">Conscious Expanded Existence</p>
                </div>
              </motion.div>

              <div className="flex items-center gap-4">
                <div className="dimension-card px-4 py-2 rounded-lg">
                  <div className="text-xs text-gray-400">Consciousness Level</div>
                  <div className="text-lg font-bold text-purple-400">{consciousnessLevel}</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="container mx-auto px-6 mt-8">
          <div className="flex gap-4 border-b border-purple-500/20">
            {(['overview', 'tokens', 'dimensions', 'worlds'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 capitalize transition-all ${
                  activeTab === tab
                    ? 'border-b-2 border-purple-400 text-purple-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <main className="container mx-auto px-6 py-8">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Stats Cards */}
              <div className="dimension-card p-6 rounded-xl reality-glow">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-1">30+</h3>
                <p className="text-gray-400 text-sm">Active Dimensions</p>
              </div>

              <div className="dimension-card p-6 rounded-xl reality-glow">
                <div className="flex items-center justify-between mb-4">
                  <Layers className="w-8 h-8 text-blue-400" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-1">3</h3>
                <p className="text-gray-400 text-sm">Foundational Worlds</p>
              </div>

              <div className="dimension-card p-6 rounded-xl reality-glow">
                <div className="flex items-center justify-between mb-4">
                  <Coins className="w-8 h-8 text-cyan-400" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-1">8,550</h3>
                <p className="text-gray-400 text-sm">Total Token Balance</p>
              </div>

              <div className="dimension-card p-6 rounded-xl reality-glow">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-1">Level {consciousnessLevel}</h3>
                <p className="text-gray-400 text-sm">Consciousness</p>
              </div>

              {/* Featured Section */}
              <div className="col-span-full dimension-card p-8 rounded-xl mt-4">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Welcome to the XFI Ecosystem
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience a transcendent metaverse ecosystem that goes beyond traditional virtual worlds.
                  Navigate through 30+ interconnected dimensions, from physical realms to pure consciousness,
                  powered by an advanced tokenized economy that rewards exploration and growth.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                    <h4 className="font-semibold mb-2 text-purple-400">Neural Immersion</h4>
                    <p className="text-sm text-gray-400">Full consciousness integration with reality layers</p>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold mb-2 text-blue-400">Token Economy</h4>
                    <p className="text-sm text-gray-400">Multi-token system with circular economic flow</p>
                  </div>
                  <div className="bg-pink-500/10 p-4 rounded-lg border border-pink-500/20">
                    <h4 className="font-semibold mb-2 text-pink-400">Conscious Evolution</h4>
                    <p className="text-sm text-gray-400">Progress through dimensions as you expand awareness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tokens' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="dimension-card p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Token Portfolio</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tokens.map((token) => {
                    const Icon = token.icon;
                    return (
                      <div key={token.symbol} className="bg-cosmic-dark/50 p-6 rounded-lg border border-purple-500/20">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 ${token.color}`} />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg">{token.symbol}</h3>
                              <p className="text-sm text-gray-400">{token.name}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{token.balance.toLocaleString()}</div>
                          </div>
                        </div>
                        {token.symbol === 'SOUL' && (
                          <div className="mt-3 pt-3 border-t border-purple-500/20">
                            <span className="text-xs text-gray-400">Non-transferable reputation token</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="dimension-card p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Tokenomics</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                      <h4 className="font-semibold mb-2 text-green-400">Emission Rate</h4>
                      <p className="text-sm text-gray-400">5% APY (decreasing)</p>
                    </div>
                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                      <h4 className="font-semibold mb-2 text-red-400">Burn Mechanism</h4>
                      <p className="text-sm text-gray-400">1% per transaction + 50% fees</p>
                    </div>
                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                      <h4 className="font-semibold mb-2 text-blue-400">Staking Rewards</h4>
                      <p className="text-sm text-gray-400">40% of emission rewards</p>
                    </div>
                    <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="font-semibold mb-2 text-purple-400">Creator Share</h4>
                      <p className="text-sm text-gray-400">25% of emission rewards</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'dimensions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="dimension-card p-6 rounded-xl mb-6">
                <h2 className="text-2xl font-bold mb-2">Reality Dimensions</h2>
                <p className="text-gray-400">Navigate through nested realities from physical to primordial existence</p>
              </div>

              {dimensions.map((dimension) => (
                <motion.div
                  key={dimension.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: dimension.id * 0.1 }}
                  className={`dimension-card p-6 rounded-xl ${
                    dimension.unlocked ? 'reality-glow' : 'opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-purple-400">#{dimension.id}</span>
                        <div>
                          <h3 className="text-xl font-bold">{dimension.name}</h3>
                          <p className="text-sm text-gray-400">{dimension.type}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-2">{dimension.description}</p>
                    </div>
                    <div>
                      {dimension.unlocked ? (
                        <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30">
                          Unlocked
                        </div>
                      ) : (
                        <div className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg border border-gray-500/30">
                          Locked
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'worlds' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {worlds.map((world, index) => (
                <motion.div
                  key={world.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="dimension-card p-6 rounded-xl reality-glow hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-full cosmic-gradient flex items-center justify-center text-2xl">
                      {world.name[0]}
                    </div>
                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                      D{world.dimension}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{world.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{world.type}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{world.description}</p>
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Enter World
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 mt-12 border-t border-purple-500/20">
          <div className="text-center text-gray-400 text-sm">
            <p>XFI Ecosystem - Transcendent Metaverse Experience</p>
            <p className="mt-2">Conscious Expanded Existence | 30+ Dimensions | Neural Immersion</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

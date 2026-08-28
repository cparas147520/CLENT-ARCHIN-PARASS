import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sliders, 
  Code2, 
  Copy, 
  Check, 
  Sparkles, 
  Zap, 
  Layers, 
  RotateCcw,
  Smartphone,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveCodePlayground: React.FC = () => {
  const [componentType, setComponentType] = useState<'button' | 'card' | 'badge'>('button');
  const [borderRadius, setBorderRadius] = useState(0);
  const [springStiffness, setSpringStiffness] = useState(120);
  const [springDamping, setSpringDamping] = useState(14);
  const [accentColor, setAccentColor] = useState<'red' | 'white' | 'emerald' | 'amber'>('red');
  const [isPressed, setIsPressed] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = {
    red: { bg: 'bg-[#FF3B3F]', text: 'text-black', hex: '#FF3B3F', ring: 'ring-[#FF3B3F]', badge: 'bg-[#FF3B3F]/20 text-[#FF3B3F] border-[#FF3B3F]/40' },
    white: { bg: 'bg-white', text: 'text-black', hex: '#ffffff', ring: 'ring-white', badge: 'bg-white/20 text-white border-white/40' },
    emerald: { bg: 'bg-emerald-500', text: 'text-black', hex: '#10b981', ring: 'ring-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    amber: { bg: 'bg-amber-400', text: 'text-black', hex: '#f59e0b', ring: 'ring-amber-400', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  };

  const getGeneratedCode = () => {
    if (componentType === 'button') {
      return `import React from 'react';
import { Text, Pressable } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const FluidSpringButton = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    scale.value = withSpring(0.94, {
      stiffness: ${springStiffness},
      damping: ${springDamping},
    });
  };

  const onPressOut = () => {
    scale.value = withSpring(1, {
      stiffness: ${springStiffness},
      damping: ${springDamping},
    });
  };

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        animatedStyle,
        {
          backgroundColor: '${colors[accentColor].hex}',
          borderRadius: ${borderRadius},
          paddingVertical: 14,
          paddingHorizontal: 28,
          alignItems: 'center',
          shadowColor: '${colors[accentColor].hex}',
          shadowOpacity: 0.35,
          shadowRadius: 10,
        }
      ]}
    >
      <Text style={{ fontWeight: '800', color: '#000000', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1.5 }}>
        Tap 60FPS Spring Button
      </Text>
    </AnimatedPressable>
  );
};`;
    }

    if (componentType === 'card') {
      return `import React from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export const InteractiveMetricCard = () => {
  return (
    <View 
      style={{
        backgroundColor: '#121212',
        borderRadius: ${borderRadius},
        padding: 20,
        borderWidth: 1,
        borderColor: '${colors[accentColor].hex}33',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 16,
      }}
    >
      <Text style={{ color: '${colors[accentColor].hex}', fontSize: 11, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase' }}>
        REANIMATED 3 WORKLET
      </Text>
      <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '900', marginTop: 4, textTransform: 'uppercase' }}>
        Fluid Micro-Interactions
      </Text>
      <Text style={{ color: '#999999', fontSize: 12, marginTop: 6 }}>
        Engineered with sub-millisecond response and zero garbage collection drops.
      </Text>
    </View>
  );
};`;
    }

    return `import React from 'react';
import { View, Text } from 'react-native';

export const StatusPillBadge = () => (
  <View
    style={{
      backgroundColor: '${colors[accentColor].hex}20',
      borderColor: '${colors[accentColor].hex}60',
      borderWidth: 1,
      borderRadius: ${borderRadius},
      paddingHorizontal: 14,
      paddingVertical: 6,
      alignSelf: 'flex-start',
    }}
  >
    <Text style={{ color: '${colors[accentColor].hex}', fontWeight: '800', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase' }}>
      ● TurboModules 0.76+ Enabled
    </Text>
  </View>
);`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getGeneratedCode());
    setCopied(true);
    confetti({ particleCount: 25, spread: 40 });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
              Interactive Lab 03
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Component Sandbox
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-2xl">
              Experiment with spring physics, border tokens, and theme accents. Export clean, production-ready TypeScript code directly into your Expo project.
            </p>
          </div>
        </div>

        {/* 2-Column Sandbox Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls & Live Preview Card (Left Col) */}
          <div className="lg:col-span-6 bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Component Selector */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50">
                  Target Component
                </span>
                <div className="flex bg-black p-1 border border-white/10">
                  {(['button', 'card', 'badge'] as const).map((type) => (
                    <button
                      key={type}
                      id={`sandbox-type-${type}`}
                      onClick={() => setComponentType(type)}
                      className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                        componentType === type
                          ? 'bg-[#FF3B3F] text-black font-black shadow-sm'
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders Configuration */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Corner Radius</span>
                    <span className="font-mono text-[#FF3B3F] font-bold text-xs">{borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-full accent-[#FF3B3F] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Spring Stiffness</span>
                    <span className="font-mono text-[#FF3B3F] font-bold text-xs">{springStiffness}</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="240"
                    value={springStiffness}
                    onChange={(e) => setSpringStiffness(Number(e.target.value))}
                    className="w-full accent-[#FF3B3F] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Spring Damping</span>
                    <span className="font-mono text-[#FF3B3F] font-bold text-xs">{springDamping}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={springDamping}
                    onChange={(e) => setSpringDamping(Number(e.target.value))}
                    className="w-full accent-[#FF3B3F] cursor-pointer"
                  />
                </div>

                {/* Color Scheme Picker */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold block mb-2.5">Accent Palette</span>
                  <div className="flex gap-3">
                    {(['red', 'white', 'emerald', 'amber'] as const).map((col) => (
                      <button
                        key={col}
                        onClick={() => setAccentColor(col)}
                        className={`w-7 h-7 border transition-all ${colors[col].bg} ${
                          accentColor === col ? 'border-white scale-110 shadow-lg ring-2 ring-white/40' : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Interactive Preview Canvas */}
            <div className="bg-black p-8 border border-white/10 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
              <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                <Eye className="w-3 h-3 text-[#FF3B3F]" /> Live React Native Canvas
              </div>

              {componentType === 'button' && (
                <motion.button
                  id="sandbox-interactive-btn"
                  animate={{ scale: isPressed ? 0.93 : 1 }}
                  transition={{ type: 'spring', stiffness: springStiffness, damping: springDamping }}
                  onMouseDown={() => setIsPressed(true)}
                  onMouseUp={() => setIsPressed(false)}
                  onTouchStart={() => setIsPressed(true)}
                  onTouchEnd={() => setIsPressed(false)}
                  style={{ borderRadius: `${borderRadius}px` }}
                  className={`px-8 py-3.5 ${colors[accentColor].bg} ${colors[accentColor].text} font-black text-xs uppercase tracking-widest shadow-xl cursor-pointer select-none transition-shadow`}
                >
                  Tap 60FPS Spring Button
                </motion.button>
              )}

              {componentType === 'card' && (
                <div
                  style={{ borderRadius: `${borderRadius}px` }}
                  className="bg-[#141414] p-5 border border-white/10 max-w-sm w-full shadow-2xl"
                >
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${colors[accentColor].badge} px-2 py-0.5 inline-block mb-2`}>
                    REANIMATED 3 WORKLET
                  </span>
                  <h4 className="text-base font-black uppercase text-white tracking-tight">Fluid Micro-Interactions</h4>
                  <p className="text-xs text-white/50 mt-1">
                    Engineered with sub-millisecond response and zero garbage collection drops.
                  </p>
                </div>
              )}

              {componentType === 'badge' && (
                <div
                  style={{ borderRadius: `${borderRadius}px` }}
                  className={`px-4 py-1.5 border font-mono text-[10px] uppercase tracking-wider font-bold ${colors[accentColor].badge}`}
                >
                  ● TurboModules 0.76+ Enabled
                </div>
              )}
            </div>
          </div>

          {/* Generated TypeScript Code Viewer (Right Col) */}
          <div className="lg:col-span-6 bg-black border border-white/10 flex flex-col overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="px-5 py-3.5 bg-[#141414] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#FF3B3F]" />
                <span className="font-mono text-xs text-white/80 font-bold uppercase tracking-wider">
                  ComponentOutput.tsx
                </span>
              </div>
              <button
                id="sandbox-copy-code-btn"
                onClick={copyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF3B3F] hover:bg-[#ff5558] text-black text-[10px] uppercase font-black tracking-wider transition-all active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 flex-1 font-mono text-xs text-white/90 overflow-x-auto leading-relaxed scrollbar-thin bg-black">
              <pre className="whitespace-pre">{getGeneratedCode()}</pre>
            </div>

            {/* Footer Tag */}
            <div className="px-5 py-3 bg-[#141414] border-t border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/50 flex items-center justify-between">
              <span>TypeScript Strict: Passed</span>
              <span className="text-[#FF3B3F] font-bold">Zero Dependencies Beyond Expo</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

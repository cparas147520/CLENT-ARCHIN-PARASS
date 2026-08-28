import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Smartphone, 
  Activity, 
  ShoppingBag, 
  MessageSquare, 
  Sparkles, 
  Code, 
  RotateCw, 
  Sliders, 
  Heart, 
  Flame, 
  Footprints, 
  Play, 
  Pause, 
  Check, 
  Send, 
  Volume2, 
  Bell, 
  Battery, 
  Wifi, 
  ChevronRight,
  Plus,
  Trash2,
  Terminal,
  Layers,
  Zap,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

type AppType = 'pulsefit' | 'omnishop' | 'devchat' | 'uikit';

interface Message {
  id: string;
  sender: 'clent' | 'user';
  text: string;
  time: string;
  audio?: boolean;
}

export const PhoneSimulator: React.FC = () => {
  const [activeApp, setActiveApp] = useState<AppType>('pulsefit');
  const [deviceType, setDeviceType] = useState<'ios' | 'android'>('ios');
  const [showCode, setShowCode] = useState(false);
  const [showFpsMonitor, setShowFpsMonitor] = useState(true);
  const [currentTime, setCurrentTime] = useState('09:41');

  // PulseFit App State
  const [isWorkingOut, setIsWorkingOut] = useState(false);
  const [heartRate, setHeartRate] = useState(74);
  const [steps, setSteps] = useState(6420);
  const [calories, setCalories] = useState(385);
  const [workoutSeconds, setWorkoutSeconds] = useState(0);

  // OmniShop App State
  const [cart, setCart] = useState<{ id: string; name: string; price: number; img: string }[]>([
    { id: '1', name: 'AirPulse Pro Earbuds', price: 149, img: '🎧' }
  ]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // DevChat App State
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'clent', text: "Hey! I'm Clent Archin Paras 👋 React Native & Mobile Engineer.", time: '09:40' },
    { id: '2', sender: 'clent', text: 'I build fluid 60FPS apps for iOS & Android with Expo & Reanimated. What kind of project are you building?', time: '09:41' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // UI Kit App State
  const [sliderVal, setSliderVal] = useState(65);
  const [toggleState, setToggleState] = useState(true);
  const [hapticFeedbackTriggered, setHapticFeedbackTriggered] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'Daily' | 'Weekly' | 'Monthly'>('Weekly');
  const [cardSwiped, setCardSwiped] = useState(false);

  // Clock updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Workout Timer & Live Telemetry
  useEffect(() => {
    let timer: any;
    if (isWorkingOut) {
      timer = setInterval(() => {
        setWorkoutSeconds(prev => prev + 1);
        setSteps(prev => prev + Math.floor(Math.random() * 3 + 1));
        setCalories(prev => prev + (Math.random() > 0.6 ? 1 : 0));
        setHeartRate(prev => Math.min(168, Math.max(128, prev + Math.floor(Math.random() * 5 - 2))));
      }, 1000);
    } else {
      setHeartRate(prev => (prev > 78 ? prev - 2 : 74));
    }
    return () => clearInterval(timer);
  }, [isWorkingOut]);

  // Scroll chat to bottom
  useEffect(() => {
    if (activeApp === 'devchat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, activeApp]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim(),
      time: currentTime
    };

    setMessages(prev => [...prev, newMsg]);
    const userQuery = inputText.toLowerCase();
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Thanks for reaching out! Clent Archin Paras is available for React Native contracts, full-stack mobile apps, and technical consultations.";
      if (userQuery.includes('rate') || userQuery.includes('hire') || userQuery.includes('cost') || userQuery.includes('available')) {
        reply = "Clent is actively taking on freelance mobile projects and engineering roles! You can email directly at c.paras.147520.tc@umindanao.edu.ph or use the contact section below.";
      } else if (userQuery.includes('expo') || userQuery.includes('stack') || userQuery.includes('tech')) {
        reply = "Clent specializes in React Native, Expo SDK 52+, TypeScript, Reanimated 3, NativeWind, SQLite, and Firebase/Supabase.";
      } else if (userQuery.includes('experience') || userQuery.includes('umindanao') || userQuery.includes('school')) {
        reply = "Clent graduated with computer studies from the University of Mindanao with 4+ years of cross-platform development expertise.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'clent',
          text: reply,
          time: currentTime
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const triggerHaptic = () => {
    setHapticFeedbackTriggered(true);
    setTimeout(() => setHapticFeedbackTriggered(false), 400);
  };

  const handleCheckout = () => {
    triggerHaptic();
    setCheckoutSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setCheckoutSuccess(false);
      setIsCheckoutOpen(false);
      setCart([]);
    }, 2000);
  };

  const codeSnippets: Record<AppType, { title: string; filename: string; code: string }> = {
    pulsefit: {
      title: 'PulseFit Telemetry & Health Tracker',
      filename: 'screens/PulseFitScreen.tsx',
      code: `import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

export default function PulseFitScreen() {
  const [isWorkingOut, setIsWorkingOut] = useState(${isWorkingOut});
  const heartRate = useSharedValue(${heartRate});

  const toggleWorkout = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setIsWorkingOut(!isWorkingOut);
  };

  return (
    <View className="flex-1 bg-slate-950 p-4">
      <View className="bg-slate-900/80 rounded-2xl p-5 border border-cyan-500/20">
        <Text className="text-cyan-400 font-mono text-xs uppercase">Telemetry Live</Text>
        <Text className="text-white text-3xl font-black mt-1">${heartRate} BPM</Text>
        <Text className="text-slate-400 text-sm mt-1">${steps.toLocaleString()} Steps • ${calories} kCal</Text>
      </View>

      <TouchableOpacity 
        onPress={toggleWorkout}
        className="mt-6 bg-cyan-500 py-3.5 rounded-xl items-center"
      >
        <Text className="text-slate-950 font-bold">
          {isWorkingOut ? 'Pause Session' : 'Start High-Intensity Run'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}`
    },
    omnishop: {
      title: 'OmniShop M-Commerce & Stripe Pay',
      filename: 'components/OmniCartSheet.tsx',
      code: `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import * as Haptics from 'expo-haptics';

export const OmniCartSheet = ({ items, total }: { items: any[]; total: number }) => {
  const { initPaymentSheet, presentPaymentSheet } = usePaymentSheet();

  const handle1TapPay = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // Trigger Native Apple Pay / Google Pay Sheet
    const { error } = await presentPaymentSheet();
    if (!error) console.log('Payment completed securely');
  };

  return (
    <View className="bg-slate-900 p-6 rounded-t-3xl border-t border-cyan-500/30">
      <Text className="text-white text-xl font-bold">Order Summary</Text>
      <Text className="text-slate-400 text-sm mt-1">Total: \${total.toFixed(2)} USD</Text>
      <TouchableOpacity 
        onPress={handle1TapPay}
        className="mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 py-3.5 rounded-xl items-center"
      >
        <Text className="text-slate-950 font-bold">Confirm with Apple Pay</Text>
      </TouchableOpacity>
    </View>
  );
};`
    },
    devchat: {
      title: 'DevChat Real-Time Messaging & Supabase',
      filename: 'hooks/useDevChatSocket.ts',
      code: `import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import * as Haptics from 'expo-haptics';

export function useDevChatStream(channelId: string) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const channel = supabase
      .channel('chat:' + channelId)
      .on('broadcast', { event: 'message' }, async (payload) => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setMessages((prev) => [...prev, payload.payload]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [channelId]);

  return { messages };
}`
    },
    uikit: {
      title: 'NativeUI Spring Physics & Gesture Worklets',
      filename: 'components/SpringGestureCard.tsx',
      code: `import React from 'react';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const SpringGestureCard = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd(() => {
      translateX.value = withSpring(0, { damping: 14, stiffness: 100 });
      translateY.value = withSpring(0, { damping: 14, stiffness: 100 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value }
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={animatedStyle} className="bg-slate-800 p-6 rounded-2xl" />
    </GestureDetector>
  );
};`
    }
  };

  return (
    <div id="simulator" className="relative w-full max-w-5xl mx-auto py-16 px-4">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#FF3B3F] font-bold mb-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B3F]" />
            Interactive Engine 01
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Live Mobile Apps Engine
          </h2>
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.15em] mt-2 max-w-xl leading-relaxed">
            Test live simulated React Native mobile apps developed by Clent Archin Paras. Tap, interact with controls, and inspect the real React Native code.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center gap-2 bg-[#141414] p-1.5 border border-white/10">
          <button
            id="sim-device-ios"
            onClick={() => { setDeviceType('ios'); triggerHaptic(); }}
            className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold transition-all ${
              deviceType === 'ios'
                ? 'bg-[#FF3B3F] text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            iPhone 16
          </button>
          <button
            id="sim-device-android"
            onClick={() => { setDeviceType('android'); triggerHaptic(); }}
            className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold transition-all ${
              deviceType === 'android'
                ? 'bg-[#FF3B3F] text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Pixel 9 Pro
          </button>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <button
            id="sim-toggle-code"
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold transition-all ${
              showCode
                ? 'bg-white text-black'
                : 'text-white/60 hover:text-white bg-white/5'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>{showCode ? 'Hide Code' : 'RN Code'}</span>
          </button>
          <button
            id="sim-fps-toggle"
            onClick={() => setShowFpsMonitor(!showFpsMonitor)}
            title="Toggle FPS Performance Overlay"
            className={`p-1.5 text-xs transition-all ${
              showFpsMonitor ? 'text-[#FF3B3F] bg-[#FF3B3F]/10' : 'text-white/40 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Simulator + Code View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Simulator Column */}
        <div className={`flex flex-col items-center justify-center ${showCode ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
          {/* App Switcher Pills */}
          <div className="flex items-center justify-center gap-1.5 mb-6 p-1 bg-[#141414] border border-white/10 shadow-2xl max-w-full overflow-x-auto">
            <button
              id="app-tab-pulsefit"
              onClick={() => { setActiveApp('pulsefit'); triggerHaptic(); }}
              className={`flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                activeApp === 'pulsefit'
                  ? 'bg-[#FF3B3F] text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              PulseFit
            </button>
            <button
              id="app-tab-omnishop"
              onClick={() => { setActiveApp('omnishop'); triggerHaptic(); }}
              className={`flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                activeApp === 'omnishop'
                  ? 'bg-[#FF3B3F] text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              OmniShop
            </button>
            <button
              id="app-tab-devchat"
              onClick={() => { setActiveApp('devchat'); triggerHaptic(); }}
              className={`flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                activeApp === 'devchat'
                  ? 'bg-[#FF3B3F] text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              DevChat
            </button>
            <button
              id="app-tab-uikit"
              onClick={() => { setActiveApp('uikit'); triggerHaptic(); }}
              className={`flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
                activeApp === 'uikit'
                  ? 'bg-[#FF3B3F] text-black shadow-md'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              RN UI Lab
            </button>
          </div>

          {/* Phone Frame Device Container */}
          <div
            className={`relative w-[340px] sm:w-[370px] h-[680px] sm:h-[720px] bg-[#0c0c0c] rounded-[48px] p-3 transition-all duration-300 phone-shadow border-[4px] ${
              deviceType === 'ios' ? 'border-[#262626]' : 'border-[#333] rounded-[36px]'
            } ${hapticFeedbackTriggered ? 'scale-[0.99] ring-2 ring-[#FF3B3F]' : ''}`}
          >
            {/* Phone Bezel Interior */}
            <div className="relative w-full h-full bg-[#0a0a0a] rounded-[40px] overflow-hidden flex flex-col border border-white/5">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40">
                {deviceType === 'ios' ? (
                  <motion.div 
                    layout
                    className="w-28 h-6 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#FF3B3F]/70" />
                    </div>
                    {isWorkingOut && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1 text-[10px] text-[#FF3B3F] font-bold"
                      >
                        <Heart className="w-2.5 h-2.5 text-[#FF3B3F] fill-[#FF3B3F] animate-pulse" />
                        <span>{heartRate}</span>
                      </motion.div>
                    )}
                    <div className="w-2 h-2 rounded-full bg-[#FF3B3F]/40" />
                  </motion.div>
                ) : (
                  <div className="w-3.5 h-3.5 bg-black rounded-full mx-auto border border-white/10" />
                )}
              </div>

              {/* Status Bar */}
              <div className="h-10 pt-2 px-6 flex items-center justify-between text-xs font-semibold text-white/70 select-none z-30">
                <span className="font-mono text-[11px] tracking-tight">{currentTime}</span>
                <div className="flex items-center gap-1.5 text-white/70">
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono">5G</span>
                  <Battery className="w-4 h-4 fill-white" />
                </div>
              </div>

              {/* FPS Performance Monitor Overlay */}
              {showFpsMonitor && (
                <div className="absolute top-11 right-3 z-30 bg-black/90 backdrop-blur-md px-2 py-1 border border-[#FF3B3F]/40 text-[9px] font-mono text-[#FF3B3F] flex items-center gap-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B3F] animate-ping" />
                  <span>UI: 60 FPS</span>
                  <span className="text-white/30">|</span>
                  <span>JS: 59.9</span>
                </div>
              )}

              {/* Screen Content Area */}
              <div className="flex-1 overflow-y-auto relative scrollbar-none flex flex-col">
                <AnimatePresence mode="wait">
                  {/* APP 1: PULSEFIT */}
                  {activeApp === 'pulsefit' && (
                    <motion.div
                      key="pulsefit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 p-4 pb-20 flex flex-col"
                    >
                      {/* App Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-[10px] text-[#FF3B3F] font-bold uppercase tracking-[0.2em]">PulseFit Track</p>
                          <h3 className="text-lg font-black uppercase text-white tracking-tight">Daily Workout</h3>
                        </div>
                        <div className="w-8 h-8 bg-[#141414] border border-white/10 flex items-center justify-center text-[#FF3B3F]">
                          <Activity className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Heart Rate Hero Card */}
                      <div className="relative overflow-hidden bg-[#141414] p-4 border border-white/10 mb-3 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{ scale: isWorkingOut ? [1, 1.25, 1] : 1 }}
                              transition={{ repeat: Infinity, duration: isWorkingOut ? 0.6 : 1.2 }}
                              className="w-8 h-8 rounded-full bg-[#FF3B3F]/20 border border-[#FF3B3F]/40 flex items-center justify-center"
                            >
                              <Heart className="w-4 h-4 text-[#FF3B3F] fill-[#FF3B3F]" />
                            </motion.div>
                            <div>
                              <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold">BPM Realtime</span>
                              <p className="text-2xl font-black text-white leading-tight">{heartRate} <span className="text-xs font-normal text-white/40">bpm</span></p>
                            </div>
                          </div>
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 font-bold ${
                            isWorkingOut ? 'bg-[#FF3B3F] text-black' : 'bg-white/10 text-white/80'
                          }`}>
                            {isWorkingOut ? 'Active Zone 3' : 'Resting'}
                          </span>
                        </div>

                        {/* Animated Waveform */}
                        <div className="h-10 mt-3 flex items-end gap-1 px-1">
                          {[40, 65, 30, 85, 95, 45, 70, 90, 60, 80, 100, 55, 75, 90, 65, 85, 40, 70, 90].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: isWorkingOut ? `${Math.min(100, h + Math.sin(i + workoutSeconds) * 20)}%` : `${h * 0.4}%` }}
                              transition={{ duration: 0.3 }}
                              className="flex-1 bg-gradient-to-t from-[#FF3B3F] to-orange-400 opacity-80"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Metrics 2-Col Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-[#141414] p-3 border border-white/10">
                          <div className="flex items-center gap-1.5 text-[#FF3B3F] text-[10px] uppercase font-bold tracking-wider mb-1">
                            <Footprints className="w-3.5 h-3.5" />
                            <span>Steps</span>
                          </div>
                          <p className="text-lg font-black text-white">{steps.toLocaleString()}</p>
                          <div className="w-full h-1 bg-white/10 mt-2 overflow-hidden">
                            <div className="h-full bg-[#FF3B3F]" style={{ width: `${Math.min(100, (steps / 10000) * 100)}%` }} />
                          </div>
                        </div>

                        <div className="bg-[#141414] p-3 border border-white/10">
                          <div className="flex items-center gap-1.5 text-orange-400 text-[10px] uppercase font-bold tracking-wider mb-1">
                            <Flame className="w-3.5 h-3.5" />
                            <span>Calories</span>
                          </div>
                          <p className="text-lg font-black text-white">{calories} <span className="text-[10px] font-normal text-white/40">kcal</span></p>
                          <div className="w-full h-1 bg-white/10 mt-2 overflow-hidden">
                            <div className="h-full bg-orange-400" style={{ width: `${Math.min(100, (calories / 600) * 100)}%` }} />
                          </div>
                        </div>
                      </div>

                      {/* Workout Session Controller */}
                      <div className="mt-auto bg-[#141414] p-3.5 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-white/40">Duration</p>
                          <p className="text-sm font-mono font-bold text-white">
                            {String(Math.floor(workoutSeconds / 60)).padStart(2, '0')}:
                            {String(workoutSeconds % 60).padStart(2, '0')}
                          </p>
                        </div>
                        <button
                          id="btn-workout-toggle"
                          onClick={() => {
                            setIsWorkingOut(!isWorkingOut);
                            triggerHaptic();
                          }}
                          className={`flex items-center gap-2 px-4 py-2.5 font-black text-[10px] uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                            isWorkingOut
                              ? 'bg-white text-black'
                              : 'bg-[#FF3B3F] text-black shadow-[#FF3B3F]/20'
                          }`}
                        >
                          {isWorkingOut ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                          <span>{isWorkingOut ? 'Pause Run' : 'Start GPS Run'}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* APP 2: OMNISHOP */}
                  {activeApp === 'omnishop' && (
                    <motion.div
                      key="omnishop"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 p-4 pb-20 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-[10px] text-[#FF3B3F] font-bold uppercase tracking-[0.2em]">OmniShop M-Commerce</p>
                          <h3 className="text-lg font-black uppercase text-white tracking-tight">Explore Drops</h3>
                        </div>
                        <div className="relative">
                          <button
                            id="cart-icon-btn"
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-9 h-9 bg-[#141414] border border-white/10 flex items-center justify-center text-[#FF3B3F] hover:border-[#FF3B3F]"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            {cart.length > 0 && (
                              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF3B3F] text-black text-[9px] font-black rounded-full flex items-center justify-center">
                                {cart.length}
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Featured Product Card */}
                      <div className="bg-[#141414] p-4 border border-white/10 mb-3 shadow-md">
                        <div className="w-full h-24 bg-white/5 flex items-center justify-center text-4xl mb-3 border border-white/5">
                          🎧
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-xs uppercase font-bold text-white tracking-wide">AirPulse Studio Pro</h4>
                            <p className="text-[10px] text-white/40">Spatial Audio • Active ANC</p>
                          </div>
                          <span className="text-sm font-black text-[#FF3B3F]">$149</span>
                        </div>
                        <button
                          id="btn-add-airpulse"
                          onClick={() => {
                            setCart(prev => [...prev, { id: Date.now().toString(), name: 'AirPulse Studio Pro', price: 149, img: '🎧' }]);
                            triggerHaptic();
                          }}
                          className="mt-3 w-full bg-white/5 hover:bg-[#FF3B3F] hover:text-black text-white py-2 text-[10px] uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Mobile Cart</span>
                        </button>
                      </div>

                      {/* Secondary Product Row */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#141414] p-3 border border-white/10 flex flex-col justify-between">
                          <div className="text-2xl mb-1">⌚</div>
                          <div>
                            <p className="text-xs uppercase font-bold text-white">CyberWatch V2</p>
                            <p className="text-[10px] text-white/40">$229</p>
                          </div>
                          <button
                            id="btn-add-watch"
                            onClick={() => {
                              setCart(prev => [...prev, { id: Date.now().toString(), name: 'CyberWatch V2', price: 229, img: '⌚' }]);
                              triggerHaptic();
                            }}
                            className="mt-2 bg-white/5 hover:bg-[#FF3B3F] hover:text-black py-1.5 text-[10px] uppercase font-bold text-white transition-all border border-white/10"
                          >
                            + Add
                          </button>
                        </div>

                        <div className="bg-[#141414] p-3 border border-white/10 flex flex-col justify-between">
                          <div className="text-2xl mb-1">👟</div>
                          <div>
                            <p className="text-xs uppercase font-bold text-white">HyperKicks RN</p>
                            <p className="text-[10px] text-white/40">$119</p>
                          </div>
                          <button
                            id="btn-add-kicks"
                            onClick={() => {
                              setCart(prev => [...prev, { id: Date.now().toString(), name: 'HyperKicks RN', price: 119, img: '👟' }]);
                              triggerHaptic();
                            }}
                            className="mt-2 bg-white/5 hover:bg-[#FF3B3F] hover:text-black py-1.5 text-[10px] uppercase font-bold text-white transition-all border border-white/10"
                          >
                            + Add
                          </button>
                        </div>
                      </div>

                      {/* Cart Bottom Bar */}
                      {cart.length > 0 && (
                        <div className="mt-auto pt-3">
                          <button
                            id="btn-open-checkout"
                            onClick={() => setIsCheckoutOpen(true)}
                            className="w-full bg-[#FF3B3F] text-black py-2.5 font-black text-[10px] uppercase tracking-wider flex items-center justify-between px-4 shadow-lg shadow-[#FF3B3F]/20 active:scale-98"
                          >
                            <span>Checkout ({cart.length} items)</span>
                            <span>${cart.reduce((acc, c) => acc + c.price, 0)} →</span>
                          </button>
                        </div>
                      )}

                      {/* Animated Checkout Modal / Bottom Sheet */}
                      <AnimatePresence>
                        {isCheckoutOpen && (
                          <motion.div
                            initial={{ y: 250 }}
                            animate={{ y: 0 }}
                            exit={{ y: 250 }}
                            className="absolute inset-x-0 bottom-0 bg-[#121212] border-t-2 border-[#FF3B3F] p-4 shadow-2xl z-50"
                          >
                            <div className="w-8 h-1 bg-white/20 mx-auto mb-3" />
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-xs uppercase font-bold text-white tracking-wider">Stripe Payment Sheet</h4>
                              <button
                                onClick={() => setIsCheckoutOpen(false)}
                                className="text-[10px] uppercase tracking-wider text-white/40 hover:text-white"
                              >
                                Cancel
                              </button>
                            </div>

                            <div className="space-y-1.5 max-h-24 overflow-y-auto mb-3">
                              {cart.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs text-white/80 bg-black/60 p-2 border border-white/5">
                                  <span>{item.img} {item.name}</span>
                                  <span className="font-bold text-[#FF3B3F]">${item.price}</span>
                                </div>
                              ))}
                            </div>

                            <button
                              id="btn-confirm-stripe-pay"
                              onClick={handleCheckout}
                              disabled={checkoutSuccess}
                              className={`w-full py-3 font-black text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all ${
                                checkoutSuccess
                                  ? 'bg-white text-black'
                                  : 'bg-[#FF3B3F] hover:bg-[#ff5255] text-black shadow-lg shadow-[#FF3B3F]/20 active:scale-95'
                              }`}
                            >
                              {checkoutSuccess ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Payment Approved</span>
                                </>
                              ) : (
                                <>
                                  <Zap className="w-3.5 h-3.5 fill-black" />
                                  <span>Pay 1-Tap with Apple Pay (${cart.reduce((acc, c) => acc + c.price, 0)})</span>
                                </>
                              )}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}

                  {/* APP 3: DEVCHAT */}
                  {activeApp === 'devchat' && (
                    <motion.div
                      key="devchat"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 p-3 pb-2 flex flex-col h-full"
                    >
                      {/* Chat Header */}
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/10 mb-2">
                        <div className="relative">
                          <div className="w-8 h-8 bg-[#FF3B3F] text-black font-black flex items-center justify-center text-xs">
                            CP
                          </div>
                          <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 ring-2 ring-black" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">{PERSONAL_INFO.name}</h4>
                          <p className="text-[9px] uppercase tracking-widest text-[#FF3B3F]">Mobile Architect • Online</p>
                        </div>
                      </div>

                      {/* Messages Stream */}
                      <div className="flex-1 overflow-y-auto space-y-2 pr-1 text-xs">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                          >
                            <div
                              className={`max-w-[85%] p-2.5 text-[11px] leading-relaxed ${
                                msg.sender === 'user'
                                  ? 'bg-[#FF3B3F] text-black font-medium'
                                  : 'bg-[#141414] text-white/90 border border-white/10'
                              }`}
                            >
                              {msg.text}
                            </div>
                            <span className="text-[9px] font-mono text-white/30 mt-0.5 px-1">{msg.time}</span>
                          </div>
                        ))}
                        {isTyping && (
                          <div className="flex items-center gap-1 bg-[#141414] p-2 w-14 border border-white/10">
                            <span className="w-1.5 h-1.5 bg-[#FF3B3F] animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-[#FF3B3F] animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-[#FF3B3F] animate-bounce [animation-delay:0.4s]" />
                          </div>
                        )}
                        <div ref={chatBottomRef} />
                      </div>

                      {/* Quick Prompt Chips */}
                      <div className="flex gap-1.5 overflow-x-auto py-1.5 scrollbar-none">
                        <button
                          onClick={() => { setInputText('Are you available for mobile contracts?'); }}
                          className="px-2 py-1 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-[9px] uppercase tracking-wider text-white/70 whitespace-nowrap"
                        >
                          Availability
                        </button>
                        <button
                          onClick={() => { setInputText('What is your core tech stack?'); }}
                          className="px-2 py-1 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-[9px] uppercase tracking-wider text-white/70 whitespace-nowrap"
                        >
                          Tech Stack
                        </button>
                        <button
                          onClick={() => { setInputText('Tell me about your University of Mindanao experience'); }}
                          className="px-2 py-1 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-[9px] uppercase tracking-wider text-white/70 whitespace-nowrap"
                        >
                          UMindanao
                        </button>
                      </div>

                      {/* Input Bar */}
                      <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 pt-1">
                        <input
                          id="chat-input-field"
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="Ask Clent a question..."
                          className="flex-1 bg-[#141414] border border-white/10 px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FF3B3F]"
                        />
                        <button
                          id="btn-chat-send"
                          type="submit"
                          className="w-8 h-8 bg-[#FF3B3F] text-black flex items-center justify-center hover:bg-[#ff5255] active:scale-95 transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* APP 4: RN UI LAB */}
                  {activeApp === 'uikit' && (
                    <motion.div
                      key="uikit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex-1 p-4 pb-20 flex flex-col space-y-3.5"
                    >
                      <div>
                        <p className="text-[10px] text-[#FF3B3F] font-bold uppercase tracking-[0.2em]">NativeUI Motion Kit</p>
                        <h3 className="text-lg font-black uppercase text-white tracking-tight">Gesture Sandbox</h3>
                      </div>

                      {/* Interactive Swipeable Card */}
                      <div className="relative">
                        <motion.div
                          drag="x"
                          dragConstraints={{ left: -100, right: 100 }}
                          whileTap={{ scale: 0.98 }}
                          onDragEnd={(_, info) => {
                            if (Math.abs(info.offset.x) > 60) {
                              setCardSwiped(true);
                              triggerHaptic();
                              setTimeout(() => setCardSwiped(false), 800);
                            }
                          }}
                          className="bg-[#141414] p-4 border border-white/10 cursor-grab active:cursor-grabbing shadow-lg"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-mono text-[#FF3B3F] uppercase tracking-wider">← Swipe Drag →</span>
                            <Sparkles className="w-3.5 h-3.5 text-[#FF3B3F]" />
                          </div>
                          <p className="text-xs uppercase font-bold text-white">Reanimated 3 Spring Physics</p>
                          <p className="text-[10px] text-white/50 mt-1">
                            {cardSwiped ? '60FPS Worklet Gesture Fired' : 'Drag left or right to test spring elasticity.'}
                          </p>
                        </motion.div>
                      </div>

                      {/* Segmented Control */}
                      <div className="bg-[#141414] p-1 border border-white/10 flex">
                        {(['Daily', 'Weekly', 'Monthly'] as const).map((seg) => (
                          <button
                            key={seg}
                            onClick={() => { setActiveSegment(seg); triggerHaptic(); }}
                            className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider font-bold transition-all ${
                              activeSegment === seg
                                ? 'bg-[#FF3B3F] text-black shadow-sm'
                                : 'text-white/50 hover:text-white'
                            }`}
                          >
                            {seg}
                          </button>
                        ))}
                      </div>

                      {/* Spring Tension Slider */}
                      <div className="bg-[#141414] p-3.5 border border-white/10">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Damping Factor</span>
                          <span className="font-mono text-[#FF3B3F] font-bold">{sliderVal}%</span>
                        </div>
                        <input
                          id="rn-slider"
                          type="range"
                          min="10"
                          max="100"
                          value={sliderVal}
                          onChange={(e) => setSliderVal(Number(e.target.value))}
                          className="w-full accent-[#FF3B3F] cursor-pointer"
                        />
                      </div>

                      {/* Native Switch & Haptics trigger */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => { setToggleState(!toggleState); triggerHaptic(); }}
                          className="bg-[#141414] p-3 border border-white/10 flex items-center justify-between text-left"
                        >
                          <div>
                            <p className="text-xs uppercase font-bold text-white">TurboModule</p>
                            <p className="text-[9px] uppercase tracking-wider text-white/40">{toggleState ? 'Active' : 'Disabled'}</p>
                          </div>
                          <div className={`w-9 h-5 p-0.5 transition-colors ${toggleState ? 'bg-[#FF3B3F]' : 'bg-white/20'}`}>
                            <div className={`w-4 h-4 bg-black transition-transform ${toggleState ? 'translate-x-4' : 'translate-x-0'}`} />
                          </div>
                        </button>

                        <button
                          onClick={triggerHaptic}
                          className="bg-[#141414] hover:bg-[#1a1a1a] active:bg-[#FF3B3F]/20 p-3 border border-white/10 flex flex-col justify-center items-center text-center transition-all"
                        >
                          <Zap className="w-4 h-4 text-[#FF3B3F] mb-0.5" />
                          <span className="text-[10px] uppercase font-bold text-white tracking-wider">Haptic Pulse</span>
                          <span className="text-[9px] text-white/40">ImpactFeedback</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Bottom Home Bar / Navigation */}
              <div className="h-7 pb-2 flex items-center justify-center z-30">
                <div className="w-32 h-1 bg-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Code Inspector Column (Opens side-by-side or below) */}
        {showCode && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 w-full bg-[#121212] border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[680px] sm:h-[720px]"
          >
            {/* Terminal Header */}
            <div className="px-5 py-3.5 bg-black border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#FF3B3F]" />
                <div className="w-2.5 h-2.5 bg-white/40" />
                <div className="w-2.5 h-2.5 bg-white/20" />
                <span className="ml-2 font-mono text-xs text-white/60">
                  {codeSnippets[activeApp].filename}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider font-mono text-[#FF3B3F] bg-[#FF3B3F]/10 px-2 py-0.5 border border-[#FF3B3F]/30">
                React Native 0.76+
              </span>
            </div>

            {/* Code Body */}
            <div className="p-4 flex-1 overflow-y-auto bg-black/80 font-mono text-xs text-white/80 leading-relaxed scrollbar-thin">
              <div className="text-white/40 mb-2">// Architecture: {codeSnippets[activeApp].title}</div>
              <pre className="whitespace-pre font-mono text-white/90">
                {codeSnippets[activeApp].code}
              </pre>
            </div>

            {/* Terminal Footer */}
            <div className="px-5 py-3 bg-black border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#FF3B3F]" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Expo EAS Build System</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeSnippets[activeApp].code);
                  confetti({ particleCount: 20, spread: 40 });
                }}
                className="text-[#FF3B3F] hover:text-[#ff6568] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Copy TSX
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

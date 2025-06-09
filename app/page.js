import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
import MiddleComponent from "@/components/MiddleComponent";
import AnimatedBackground from "@/components/AnimatedBackground";
import Features from "@/components/Features";
export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeaderComponent />
        <div className=""> {/* Add padding to account for fixed header */}
          <MiddleComponent />
        </div>
      </div>
      <Features />
    </main>
  );
}
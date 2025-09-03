"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="NovaSphere Logo"
        logoWidth={120}
        logoHeight={40}
        buttonText="Get Early Access"
        onButtonClick={() => alert('Button Clicked!')}
        className="bg-transparent"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-br from-cyan-500 to-purple-500">
        <TokenBillboardHero
          title="Welcome to NovaSphere"
          subtitle="Unlock the future of SaaS with cutting-edge solutions"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Discover Our Journey"
          descriptions={["At NovaSphere, we innovate and create.", "We focus on customer satisfaction and quality."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Register on our platform", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Complete KYC", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start Trading", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Our Tokenomics"
          description="Here's how our token math works"
          kpiItems={[
            { value: "10M", description: "Total Supply", icon: "LucideIcon" },
            { value: "5M", description: "Circulating Supply", icon: "LucideIcon" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="NovaSphere Logo"
          logoText="NovaSphere"
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}

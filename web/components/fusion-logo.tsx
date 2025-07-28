import { default as Image } from 'next/image';

export function FusionLogo() {
  return (
   <div className="flex items-center justify-center">
      <Image 
        src="/logo.jpg" 
        alt="Fusion" 
        width={120}
        height={36}
        priority
        className="rounded-md"
      /> 
    </div>
  );
} 
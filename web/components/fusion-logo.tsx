import Image from 'next/image';

export function FusionLogo() {
  return (
    <div className="flex items-center justify-center">
      {/* Text-based logo with gradient */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
        fusion
      </h1>
      
      {/* Uncomment this if you want to use the image instead */}
      {/* <Image 
        src="/logo.jpg" 
        alt="Fusion" 
        width={200}
        height={60}
        priority
        className="rounded-md"
      /> */}
    </div>
  );
} 
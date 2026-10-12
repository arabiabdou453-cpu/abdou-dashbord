import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

async function generateAssets() {
  const mediaBrandingDir = path.resolve('media/branding');
  const publicDir = path.resolve('public');
  await fs.mkdir(mediaBrandingDir, { recursive: true });
  await fs.mkdir(publicDir, { recursive: true });

  // 1. Logo (600x160 Transparent PNG)
  const logoSvg = `
  <svg width="600" height="160" viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- BrandMark SVG: A / A with electric indigo slash -->
    <g transform="translate(20, 20) scale(2.8)">
      <path d="M5 35 19 7l14 28M11.5 24h15" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
      <path d="M34 35 48 7l14 28M40.5 24h15" stroke="#0f172a" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
      <path d="M28 38 42 4" stroke="#4f46e5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.8" />
    </g>
    <!-- Brand Name Text -->
    <text x="240" y="98" font-family="Segoe UI, Bahnschrift, Aptos, sans-serif" font-size="64" font-weight="900" fill="#0f172a" letter-spacing="2">Abdou</text>
    <rect x="470" y="52" width="60" height="28" rx="6" fill="#4f46e5" />
    <text x="500" y="72" font-family="Segoe UI, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">AI</text>
    <text x="242" y="128" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#4f46e5" letter-spacing="4">SMART COMMERCE</text>
  </svg>
  `;

  await sharp(Buffer.from(logoSvg))
    .png()
    .toFile(path.join(mediaBrandingDir, 'logo.png'));
  console.log('Generated logo.png');

  // 2. Favicon (512x512 Square PNG)
  const faviconSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Rounded Dark Indigo Background -->
    <rect width="512" height="512" rx="128" fill="#0f172a" />
    <rect x="12" y="12" width="488" height="488" rx="116" stroke="#4f46e5" stroke-width="12" stroke-opacity="0.6" />
    
    <!-- Central BrandMark scaled to fit -->
    <g transform="translate(68, 120) scale(5.6)">
      <path d="M5 35 19 7l14 28M11.5 24h15" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
      <path d="M34 35 48 7l14 28M40.5 24h15" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
      <path d="M28 38 42 4" stroke="#6366f1" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.8" />
    </g>
  </svg>
  `;

  await sharp(Buffer.from(faviconSvg))
    .png()
    .toFile(path.join(mediaBrandingDir, 'favicon.png'));
  console.log('Generated favicon.png');

  // Also write 32x32 ico / png to public
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated public/favicon.ico');

  // 3. Social Sharing Image (1200x630 Open Graph Image)
  const socialSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#090d16" />
        <stop offset="60%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e1b4b" />
      </linearGradient>
      <linearGradient id="slashGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#818cf8" />
        <stop offset="100%" stop-color="#06b6d4" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="30" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)" />
    
    <!-- Subtle glow orb -->
    <circle cx="950" cy="200" r="280" fill="#4f46e5" opacity="0.25" filter="url(#glow)" />
    <circle cx="200" cy="500" r="240" fill="#06b6d4" opacity="0.15" filter="url(#glow)" />

    <!-- Border highlight -->
    <rect x="20" y="20" width="1160" height="590" rx="24" stroke="#312e81" stroke-width="2" />

    <!-- BrandMark -->
    <g transform="translate(100, 160) scale(4.2)">
      <path d="M5 35 19 7l14 28M11.5 24h15" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.8" />
      <path d="M34 35 48 7l14 28M40.5 24h15" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.8" />
      <path d="M28 38 42 4" stroke="url(#slashGrad)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.6" />
    </g>

    <!-- Main Title -->
    <text x="440" y="250" font-family="Segoe UI, Bahnschrift, Aptos, sans-serif" font-size="76" font-weight="900" fill="#ffffff" letter-spacing="2">Abdou Store</text>
    
    <!-- AI Badge -->
    <rect x="910" y="195" width="80" height="38" rx="8" fill="#4f46e5" />
    <text x="950" y="222" font-family="Segoe UI, sans-serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">AI</text>

    <!-- Tagline -->
    <text x="442" y="305" font-family="Segoe UI, sans-serif" font-size="28" font-weight="700" fill="#818cf8" letter-spacing="4">SMART COMMERCE &amp; PREMIUM STORE</text>
    <text x="442" y="360" font-family="Segoe UI, sans-serif" font-size="22" font-weight="400" fill="#94a3b8">The Official Store by Abderrahmane Arabi</text>

    <!-- Badges Row -->
    <g transform="translate(100, 470)">
      <rect width="280" height="54" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="140" y="34" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#f8fafc" text-anchor="middle">⚡ Fast Delivery in DZ</text>
    </g>

    <g transform="translate(410, 470)">
      <rect width="280" height="54" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="140" y="34" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#f8fafc" text-anchor="middle">🔒 Secure Checkout</text>
    </g>

    <g transform="translate(720, 470)">
      <rect width="320" height="54" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
      <text x="160" y="34" font-family="Segoe UI, sans-serif" font-size="18" font-weight="700" fill="#f8fafc" text-anchor="middle">✨ Exclusive Collections</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(socialSvg))
    .png()
    .toFile(path.join(mediaBrandingDir, 'social-share.png'));
  console.log('Generated social-share.png');
}

generateAssets().catch(console.error);

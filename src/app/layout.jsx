// Root layout for the entire application
export default function RootLayout({ children }) {
  // This layout wraps the entire app but doesn't add HTML structure
  // since that's handled by the locale-specific layout
  return children;
}

// Prevent this layout from being cached to ensure proper redirects
export const dynamic = 'force-dynamic';

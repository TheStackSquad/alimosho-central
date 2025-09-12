// app/layout.js

import "./globals.css";
import Header from "@/components/common/Header";
import HeaderSkeleton from "@/components/common/headerSkeleton";
import ToastProvider from "@/components/common/toastAlert/toastProvider";
import ReduxProvider from "@/layoutProvider/reduxProvider";
import GlobalErrorBoundary from "@/errorBoundary/globalErrorBoundary";
import ErrorBoundaryInit from "@/errorBoundary/errorBoundaryInit";
import ClientOnlyWrapper from "@/components/common/clientOnlyWrapper";
import HydrationProvider from "@/components/common/hydrationProvider";
import RealUserMonitoring from "@/components/performance/realUserMonitoring";
import { NavigationProvider } from "@/components/common/contexts/navigationContext";
import { Montserrat, Roboto_Slab } from "next/font/google";

// Configure fonts with optimal loading for the entire app
const montserrat = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Alimosho Local Government Area - Official Website",
  description:
    "Official website of Alimosho Local Government Area, Lagos State. Access government services, meet our executive team, and stay updated with community developments.",
  keywords:
    "Alimosho LGA, Lagos State, Local Government, Nigeria, Government Services, Marriage Registry, Executive Team",
  authors: [{ name: "Alimosho LGA" }],
  creator: "Alimosho Local Government Area",
  publisher: "Alimosho LGA",
  openGraph: {
    title: "Alimosho Local Government Area - Official Website",
    description:
      "Official website of Alimosho Local Government Area, Lagos State. Access government services, meet our executive team, and stay updated with community developments.",
    url: "https://aliimosho-lga.gov.ng",
    siteName: "Alimosho LGA",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alimosho Local Government Area - Official Website",
    description:
      "Official website of Alimosho Local Government Area, Lagos State.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${montserrat.variable} ${robotoSlab.variable}`}
    >
      <head>
        {/* Performance optimization meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>

      <body className="antialiased">
        <GlobalErrorBoundary>
          <ErrorBoundaryInit>
            <HydrationProvider>
              <ReduxProvider>
                <NavigationProvider>
                  {/* Header with loading skeleton */}
                  <ClientOnlyWrapper fallback={<HeaderSkeleton />}>
                    <Header />
                  </ClientOnlyWrapper>

                  {/* Main content area */}
                  <main id="main-content" className="min-h-screen">
                    {children}
                  </main>

                  {/* Toast notifications - client only */}
                  <ClientOnlyWrapper>
                    <ToastProvider />
                  </ClientOnlyWrapper>

                  {/* Performance monitoring - client only */}
                  <ClientOnlyWrapper>
                    <RealUserMonitoring />
                  </ClientOnlyWrapper>
                </NavigationProvider>
              </ReduxProvider>
            </HydrationProvider>
          </ErrorBoundaryInit>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}

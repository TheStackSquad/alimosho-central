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

export const metadata = {
  title: "Alimosho Central - Community Development & Leadership",
  description:
    "Official platform for Alimosho Central - Empowering communities through leadership, development projects, and public services in the Alimosho region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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

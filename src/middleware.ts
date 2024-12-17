/* eslint-disable @typescript-eslint/no-unused-vars */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// This will initialize Clerk middleware
export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
})

const isPublicRoute = createRouteMatcher(['/sign-in(.*)','/sign-up(.*)'])

const isProtectedRoute = createRouteMatcher([
  "/", // For dashboard
]);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
  // Define public routes that should not require authentication
  publicRoutes: [
    "/sign-in(.*)",  // Sign-in page
    "/sign-up(.*)",  // Sign-up page
    "/landing(.*)",  // Landing pages
    "/about",        // Public about page
    "/unauthorized", // Unauthorized page
  ],
};

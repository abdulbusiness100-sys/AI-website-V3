import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import WaitlistPage from "@/pages/WaitlistPage";
import { PrivacyPage, TermsPage, OfferTermsPage } from "@/pages/LegalPages";
import ReferralPage from "@/pages/ReferralPage";

// Target Pages
import InvestorDeck from "@/pages/targets/InvestorDeck";
import ScheduleMeeting from "@/pages/targets/ScheduleMeeting";
import AppStore from "@/pages/targets/AppStore";
import GooglePlay from "@/pages/targets/GooglePlay";
import MembershipPage from "@/pages/targets/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={WaitlistPage}/>
      {/* Old site pages carried the GoHighLevel "50% OFF Lifetime" sign-up: all go to the waitlist (files kept). */}
      <Route path="/home"><Redirect to="/" replace /></Route>
      <Route path="/about"><Redirect to="/" replace /></Route>
      <Route path="/services"><Redirect to="/" replace /></Route>
      <Route path="/contact"><Redirect to="/" replace /></Route>
      <Route path="/how-it-works"><Redirect to="/" replace /></Route>
      <Route path="/privacy" component={PrivacyPage}/>
      <Route path="/terms" component={TermsPage}/>
      <Route path="/offer-terms" component={OfferTermsPage}/>
      <Route path="/privacy-policy"><Redirect to="/privacy" replace /></Route>
      {/* Refer a friend (Points v2): the invite QR's link → open the app on the code. */}
      <Route path="/r/:code" component={ReferralPage}/>
      
      {/* Target Routes */}
      <Route path="/targets/investor-deck" component={InvestorDeck}/>
      <Route path="/targets/schedule-meeting" component={ScheduleMeeting}/>
      <Route path="/targets/app-store" component={AppStore}/>
      <Route path="/targets/google-play" component={GooglePlay}/>
      <Route path="/targets/membership" component={MembershipPage}/>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="font-sans">
          <Router />
          <Toaster />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

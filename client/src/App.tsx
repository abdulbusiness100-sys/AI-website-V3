import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import ComingSoonPage from "@/pages/ComingSoonPage";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import { PrivacyPage, TermsPage } from "@/pages/LegalPages";

// Target Pages
import InvestorDeck from "@/pages/targets/InvestorDeck";
import ScheduleMeeting from "@/pages/targets/ScheduleMeeting";
import AppStore from "@/pages/targets/AppStore";
import GooglePlay from "@/pages/targets/GooglePlay";
import MembershipPage from "@/pages/targets/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ComingSoonPage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/services" component={ServicesPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/how-it-works" component={HowItWorksPage}/>
      <Route path="/privacy" component={PrivacyPage}/>
      <Route path="/terms" component={TermsPage}/>
      <Route path="/privacy-policy"><Redirect to="/privacy" replace /></Route>
      
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

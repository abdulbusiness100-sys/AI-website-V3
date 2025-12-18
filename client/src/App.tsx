import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HowItWorksPage from "@/pages/HowItWorksPage";

// Target Pages
import InvestorDeck from "@/pages/targets/InvestorDeck";
import ScheduleMeeting from "@/pages/targets/ScheduleMeeting";
import AppStore from "@/pages/targets/AppStore";
import GooglePlay from "@/pages/targets/GooglePlay";
import MembershipPage from "@/pages/targets/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/services" component={ServicesPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Route path="/how-it-works" component={HowItWorksPage}/>
      
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
    <QueryClientProvider client={queryClient}>
      <div className="font-sans text-[#2C2C2C]">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;

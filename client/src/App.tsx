import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Glossary from "@/pages/Glossary";
import AppPreview from "@/pages/AppPreview";

// Feature Pages
import StationNavigator from "@/pages/features/StationNavigator";
import CommunityTips from "@/pages/features/CommunityTips";
import LiveReports from "@/pages/features/LiveReports";
import HiddenGems from "@/pages/features/HiddenGems";
import LocalBuddy from "@/pages/features/LocalBuddy";
import TransportDictionary from "@/pages/features/TransportDictionary";
import TerminalHours from "@/pages/features/TerminalHours";
import SafetyAlerts from "@/pages/features/SafetyAlerts";
import CampusIntegration from "@/pages/features/CampusIntegration";
import RouteAlternatives from "@/pages/features/RouteAlternatives";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/glossary" component={Glossary} />
      <Route path="/app" component={AppPreview} />

      {/* Feature Routes */}
      <Route path="/features/station-navigator" component={StationNavigator} />
      <Route path="/features/community-tips" component={CommunityTips} />
      <Route path="/features/live-reports" component={LiveReports} />
      <Route path="/features/hidden-gems" component={HiddenGems} />
      <Route path="/features/local-buddy" component={LocalBuddy} />
      <Route path="/features/transport-dictionary" component={TransportDictionary} />
      <Route path="/features/terminal-hours" component={TerminalHours} />
      <Route path="/features/safety-alerts" component={SafetyAlerts} />
      <Route path="/features/campus-integration" component={CampusIntegration} />
      <Route path="/features/route-alternatives" component={RouteAlternatives} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
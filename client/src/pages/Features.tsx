import { FadeIn, SlideIn } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  MapPin, 
  Users, 
  MessageSquare,
  Bell,
  Compass,
  Clock,
  Map,
  Coffee,
  AlertTriangle,
  Building,
  Bus
} from "lucide-react";

const detailedFeatures = [
  {
    icon: MapPin,
    title: "Station Navigator",
    description: "Find the nearest public transport stations with detailed information about routes, schedules, and platform locations.",
    link: "/features/station-navigator"
  },
  {
    icon: MessageSquare,
    title: "Community Tips",
    description: "Access crowd-sourced travel tips, route recommendations, and local transport knowledge from experienced commuters.",
    link: "/features/community-tips"
  },
  {
    icon: Bell,
    title: "Real-Time Reports",
    description: "Stay informed with live updates about delays, accidents, or crowded vehicles reported by fellow commuters.",
    link: "/features/live-reports"
  },
  {
    icon: Coffee,
    title: "Hidden Gems",
    description: "Discover student-friendly locations, study spots, and essential services along public transport routes, curated by the community.",
    link: "/features/hidden-gems"
  },
  {
    icon: Users,
    title: "Local Buddy System",
    description: "Get paired with experienced locals who can guide you through your first few trips and share valuable transport tips.",
    link: "/features/local-buddy"
  },
  {
    icon: MessageSquare,
    title: "Transport Dictionary",
    description: "Learn essential local transport terms and phrases like 'Para po' in different regional variations.",
    link: "/features/transport-dictionary"
  },
  {
    icon: Clock,
    title: "Terminal Hours",
    description: "Get updated information about jeepney terminal operating hours and last trip schedules.",
    link: "/features/terminal-hours"
  },
  {
    icon: AlertTriangle,
    title: "Safety Alerts",
    description: "Receive important notices about route changes, terminal closures, and safety advisories.",
    link: "/features/safety-alerts"
  },
  {
    icon: Building,
    title: "Campus Integration",
    description: "Find transport options specifically connected to university locations and student areas.",
    link: "/features/campus-integration"
  },
  {
    icon: Bus,
    title: "Route Alternatives",
    description: "Discover multiple route options with detailed fare information and estimated travel times.",
    link: "/features/route-alternatives"
  },
];

export default function Features() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Smart Local Transport Features</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how StudentNav helps you master local public transportation with community-powered features
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature, index) => (
              <Link key={feature.title} href={feature.link}>
                <a className="block h-full">
                  <SlideIn
                    direction={index % 2 === 0 ? "left" : "right"}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardHeader>
                        <feature.icon className="h-8 w-8 text-primary mb-2" />
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </SlideIn>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
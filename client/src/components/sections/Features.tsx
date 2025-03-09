import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideIn } from "@/components/ui/motion";
import { 
  MapPin, 
  Users, 
  MessageSquare,
  Bell,
  Compass,
  Clock,
  Map,
  Coffee
} from "lucide-react";

const features = [
  {
    title: "Station Navigator",
    description: "Interactive guide to locate public transportation stations and terminals near you.",
    icon: MapPin,
  },
  {
    title: "Community Tips",
    description: "Local insights and travel tips shared by experienced commuters.",
    icon: MessageSquare,
  },
  {
    title: "Real-Time Reports",
    description: "Report and view real-time updates about delays, accidents, or crowded vehicles.",
    icon: Bell,
  },
  {
    title: "Hidden Gems",
    description: "Discover student-friendly spots, cafes, and essential services not found on mainstream maps.",
    icon: Coffee,
  },
  {
    title: "Local Buddy System",
    description: "Connect with experienced locals for guidance on navigating public transport.",
    icon: Users,
  },
  {
    title: "Transport Dictionary",
    description: "Learn local transport terms and how to communicate with drivers in different regions.",
    icon: MessageSquare,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Smart Features for Smart Travel</h2>
          <p className="text-lg text-gray-600">Everything you need for seamless local transportation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SlideIn
              key={feature.title}
              direction={index % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
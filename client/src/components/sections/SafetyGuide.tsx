import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { Shield, Phone, Bell, MapPin } from "lucide-react";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Safety Guidelines",
    description: "Access comprehensive safety tips and best practices for public transport.",
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description: "Quick access to emergency numbers and campus security contacts.",
  },
  {
    icon: Bell,
    title: "Safety Alerts",
    description: "Receive real-time notifications about safety concerns in your area.",
  },
  {
    icon: MapPin,
    title: "Safe Routes",
    description: "Find the safest routes recommended by the community.",
  },
];

export function SafetyGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Safety Is Our Priority</h2>
          <p className="text-lg text-gray-600">
            Travel with confidence using our comprehensive safety features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyFeatures.map((feature, index) => (
            <FadeIn key={index}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">Learn More About Safety</Button>
        </div>
      </div>
    </section>
  );
}

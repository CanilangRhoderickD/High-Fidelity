import { FadeIn, SlideIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Download, 
  Bell, 
  MapPin, 
  Users,
  Star,
  Apple,
  PlaySquare
} from "lucide-react";

const appFeatures = [
  {
    title: "Real-Time Navigation",
    description: "Get live updates on transport schedules and routes",
    icon: MapPin,
  },
  {
    title: "Community Features",
    description: "Connect with fellow travelers and share insights",
    icon: Users,
  },
  {
    title: "Instant Notifications",
    description: "Stay informed with real-time alerts and updates",
    icon: Bell,
  },
  {
    title: "User Reviews",
    description: "Access community ratings and feedback",
    icon: Star,
  },
];

export default function AppPreview() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Experience Eco Flow City on Mobile</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download our mobile app to access all features on the go
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <SlideIn direction="left">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl transform -rotate-6"></div>
                <div className="relative bg-black rounded-[3rem] p-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1621955964441-c173e01c135b"
                    alt="App Interface"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Smart Transportation at Your Fingertips</h2>
                  <p className="text-gray-600">
                    Access all Eco Flow City features directly from your smartphone. Get real-time updates, connect with the community, and navigate sustainably.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {appFeatures.map((feature) => (
                    <Card key={feature.title} className="border-none shadow-md">
                      <CardContent className="pt-6">
                        <feature.icon className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex items-center gap-2">
                    <Apple className="h-5 w-5" />
                    App Store
                  </Button>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <PlaySquare className="h-5 w-5" />
                    Play Store
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>

          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Smartphone className="h-5 w-5" />
                <span>Available for iOS and Android</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">4.8</h3>
                  <p className="text-gray-600">App Rating</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-gray-600">Cities Covered</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

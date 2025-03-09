import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function StationNavigator() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Station Navigator</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find and navigate to public transportation stations with ease
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Nearby Stations</h3>
                        <p className="text-gray-600">Find the closest stations to your location</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Navigation className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Route Information</h3>
                        <p className="text-gray-600">Get detailed routes and platform locations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Schedule Updates</h3>
                        <p className="text-gray-600">Access real-time arrival and departure times</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1589451359791-f9c33af92239"
                  alt="Transit Station Map"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="text-center">
              <Button size="lg">Try Station Navigator</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

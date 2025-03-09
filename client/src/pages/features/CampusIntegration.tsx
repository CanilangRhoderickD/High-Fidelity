import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Clock } from "lucide-react";

const campusRoutes = [
  {
    location: "Main Campus",
    routes: "Routes 101, 102, Express A",
    schedule: "Every 15 minutes",
  },
  {
    location: "Science Building",
    routes: "Routes 103, Express B",
    schedule: "Every 20 minutes",
  },
];

export default function CampusIntegration() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Campus Integration</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the best transport options to and from your campus locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Building className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Campus Locations</h3>
                          <p className="text-gray-600">All major university buildings covered</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Route Integration</h3>
                          <p className="text-gray-600">Direct routes to campus facilities</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Class Schedules</h3>
                          <p className="text-gray-600">Transport times aligned with classes</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">View Campus Map</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {campusRoutes.map((route, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Building className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">{route.location}</h3>
                          <p className="text-gray-600">Available Routes: {route.routes}</p>
                          <p className="text-sm text-primary mt-1">{route.schedule}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

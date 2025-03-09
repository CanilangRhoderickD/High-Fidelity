import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus, Clock, Coins, ArrowRight } from "lucide-react";

const routes = [
  {
    name: "Express Route",
    duration: "25 mins",
    fare: "₱50",
    type: "Air-conditioned Bus",
  },
  {
    name: "Regular Route",
    duration: "35 mins",
    fare: "₱30",
    type: "Jeepney",
  },
];

export default function RouteAlternatives() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Route Alternatives</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Compare different routes with detailed information about fares and travel times
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Bus className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Multiple Options</h3>
                          <p className="text-gray-600">Compare different transport modes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Time Estimates</h3>
                          <p className="text-gray-600">Accurate travel duration predictions</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Coins className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Fare Information</h3>
                          <p className="text-gray-600">Updated pricing for all routes</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Find Routes</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {routes.map((route, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{route.name}</h3>
                          <p className="text-sm text-gray-600">{route.type}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-primary">{route.duration}</span>
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{route.fare}</span>
                          </div>
                        </div>
                        <Bus className="h-8 w-8 text-primary" />
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

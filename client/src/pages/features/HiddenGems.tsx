import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Book, Store, MapPin } from "lucide-react";

export default function HiddenGems() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Hidden Gems</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover student-friendly spots not found on mainstream maps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Coffee className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Study Cafes</h3>
                          <p className="text-gray-600">Find quiet cafes perfect for studying</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Book className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Libraries</h3>
                          <p className="text-gray-600">Discover public libraries and study spaces</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Store className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Essential Services</h3>
                          <p className="text-gray-600">Locate student-friendly shops and services</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Explore Hidden Gems</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">The Study Nook Cafe</h3>
                        <p className="text-gray-600">
                          Hidden cafe with free WiFi and student discounts, just 5 minutes from Central Station
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Community Library Hub</h3>
                        <p className="text-gray-600">
                          24/7 study space with power outlets and fast internet
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Star } from "lucide-react";

export default function LocalBuddy() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Local Buddy System</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with experienced locals who can guide you through your transportation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Users className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Peer Connection</h3>
                          <p className="text-gray-600">Match with experienced local students</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MessageSquare className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">In-App Chat</h3>
                          <p className="text-gray-600">Easy communication with your buddy</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Star className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Verified Buddies</h3>
                          <p className="text-gray-600">Connect with trusted community members</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Find a Local Buddy</Button>
              </div>

              <div className="relative aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                  alt="Students helping each other"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

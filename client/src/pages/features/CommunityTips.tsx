import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Users } from "lucide-react";

export default function CommunityTips() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Community Tips</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn from experienced commuters and share your own insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MessageSquare className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Share Your Experience</h3>
                          <p className="text-gray-600">Post tips and advice for specific routes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <ThumbsUp className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Helpful Insights</h3>
                          <p className="text-gray-600">Vote and comment on useful tips</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Users className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Connect with Locals</h3>
                          <p className="text-gray-600">Learn from experienced commuters</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Share Your Tips</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 italic">
                      "Take the express bus from Central Station during rush hour - it's faster than the regular route!"
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Local Student</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 italic">
                      "The front cars of the train are usually less crowded during peak hours."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- Daily Commuter</p>
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

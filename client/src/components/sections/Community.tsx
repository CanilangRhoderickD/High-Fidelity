import { Button } from "@/components/ui/button";
import { SlideIn } from "@/components/ui/motion";
import { Users, MessageSquare, Heart } from "lucide-react";

export function Community() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Join Our Growing Community</h2>
              <p className="text-lg text-gray-600">
                Connect with fellow students, share experiences, and make your daily commute better for everyone.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Student Network</h3>
                    <p className="text-gray-600">Connect with peers taking similar routes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Share Tips</h3>
                    <p className="text-gray-600">Exchange travel hacks and local knowledge</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Support System</h3>
                    <p className="text-gray-600">Help and get help from the community</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-6">Join Community</Button>
            </div>
          </SlideIn>

          <SlideIn direction="right" className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Student Community"
              className="rounded-lg object-cover w-full h-full"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

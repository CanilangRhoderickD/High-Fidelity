import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Clock } from "lucide-react";

export default function LiveReports() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Real-Time Reports</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with live updates from fellow commuters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Bell className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Instant Updates</h3>
                          <p className="text-gray-600">Report and receive real-time transport updates</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Delay Alerts</h3>
                          <p className="text-gray-600">Get notified about service disruptions</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Crowd Reports</h3>
                          <p className="text-gray-600">Know how crowded vehicles are before boarding</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Report an Issue</Button>
              </div>

              <div className="space-y-4">
                <Card className="bg-yellow-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-yellow-700 mb-2">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold">Delay Alert</span>
                    </div>
                    <p className="text-gray-600">
                      10-minute delay on Route 7 due to traffic congestion
                    </p>
                    <p className="text-sm text-gray-500 mt-2">5 minutes ago</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-blue-700 mb-2">
                      <Bell className="h-5 w-5" />
                      <span className="font-semibold">Crowd Update</span>
                    </div>
                    <p className="text-gray-600">
                      Express bus 201 is currently at 75% capacity
                    </p>
                    <p className="text-sm text-gray-500 mt-2">2 minutes ago</p>
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

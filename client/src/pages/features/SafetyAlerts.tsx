import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, Shield } from "lucide-react";

const alerts = [
  {
    type: "Warning",
    message: "Route 7 temporarily diverted due to road construction",
    time: "10 minutes ago",
    severity: "yellow",
  },
  {
    type: "Advisory",
    message: "Heavy traffic expected around Central Station during rush hour",
    time: "30 minutes ago",
    severity: "blue",
  },
];

export default function SafetyAlerts() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Safety Alerts</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed about important transport updates and safety advisories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Real-time Alerts</h3>
                          <p className="text-gray-600">Instant notifications about route changes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Bell className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Custom Notifications</h3>
                          <p className="text-gray-600">Set alerts for your regular routes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Shield className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Safety Advisories</h3>
                          <p className="text-gray-600">Important safety information and updates</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Enable Notifications</Button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <Card key={index} className={`bg-${alert.severity}-50`}>
                    <CardContent className="pt-6">
                      <div className={`flex items-center gap-2 text-${alert.severity}-700 mb-2`}>
                        <AlertTriangle className="h-5 w-5" />
                        <span className="font-semibold">{alert.type}</span>
                      </div>
                      <p className="text-gray-600">{alert.message}</p>
                      <p className="text-sm text-gray-500 mt-2">{alert.time}</p>
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

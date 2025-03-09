import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, Calendar } from "lucide-react";

const terminals = [
  {
    name: "Central Terminal",
    weekday: "4:00 AM - 10:00 PM",
    weekend: "5:00 AM - 9:00 PM",
    lastTrip: "9:30 PM",
  },
  {
    name: "North Station",
    weekday: "4:30 AM - 9:30 PM",
    weekend: "5:30 AM - 8:30 PM",
    lastTrip: "9:00 PM",
  },
];

export default function TerminalHours() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Terminal Hours</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed about terminal operating hours and last trip schedules
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Operating Hours</h3>
                          <p className="text-gray-600">Regular and holiday schedules</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Last Trip Alerts</h3>
                          <p className="text-gray-600">Never miss the last jeepney</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Holiday Schedules</h3>
                          <p className="text-gray-600">Special operation hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Set Schedule Alert</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {terminals.map((terminal, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">{terminal.name}</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-600">Weekdays:</span> {terminal.weekday}</p>
                        <p><span className="text-gray-600">Weekends:</span> {terminal.weekend}</p>
                        <p className="text-primary font-medium">Last Trip: {terminal.lastTrip}</p>
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

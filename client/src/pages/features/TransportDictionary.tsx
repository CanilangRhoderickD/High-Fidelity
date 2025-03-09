import { FadeIn } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Globe, BookOpen } from "lucide-react";

const examples = [
  {
    phrase: "Para po!",
    meaning: "Stop here please!",
    region: "Philippines - Metro Manila",
  },
  {
    phrase: "Bayad po",
    meaning: "Here's my payment",
    region: "Philippines - Nationwide",
  },
  {
    phrase: "Sakay na po",
    meaning: "Let's board now",
    region: "Philippines - Central Luzon",
  },
];

export default function TransportDictionary() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Transport Dictionary</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn essential transport phrases in different regional variations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Globe className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Regional Variations</h3>
                          <p className="text-gray-600">Learn local transport terms by region</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MessageSquare className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Common Phrases</h3>
                          <p className="text-gray-600">Essential words for daily commute</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <BookOpen className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">Audio Guides</h3>
                          <p className="text-gray-600">Learn correct pronunciations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full">Open Dictionary</Button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {examples.map((example, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="mb-2">
                        <h3 className="font-semibold text-lg">{example.phrase}</h3>
                        <p className="text-sm text-primary">{example.region}</p>
                      </div>
                      <p className="text-gray-600">{example.meaning}</p>
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

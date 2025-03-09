import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/motion";
import { Search } from "lucide-react";

const terms = [
  {
    term: "Express Route",
    definition: "A bus or train service that stops at fewer stations to provide faster travel times.",
    category: "Routes",
  },
  {
    term: "Peak Hours",
    definition: "The busiest travel times, typically during morning and evening commutes.",
    category: "Schedule",
  },
  {
    term: "Transfer Window",
    definition: "The time period allowed to change between different transport services using the same ticket.",
    category: "Tickets",
  },
  {
    term: "Real-Time Tracking",
    definition: "Live location updates of buses and trains on their routes.",
    category: "Technology",
  },
  {
    term: "Zone Fare",
    definition: "Ticket pricing based on travel through different geographical zones.",
    category: "Tickets",
  },
  {
    term: "Rush Hour",
    definition: "Peak travel periods with highest passenger volumes.",
    category: "Schedule",
  },
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = terms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Transport Terms Glossary</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn the essential terminology for navigating public transportation
              </p>
            </div>

            <div className="max-w-md mx-auto mb-12 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search terms..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item) => (
              <FadeIn key={item.term}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{item.term}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.definition}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

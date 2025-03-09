import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn } from "@/components/ui/motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "International Student",
    message: "StudentNav made my transition to a new city so much easier. I can confidently navigate the public transport system now!",
    avatar: "https://images.unsplash.com/photo-1517840933437-c41356892b35",
  },
  {
    name: "James Wilson",
    role: "Graduate Student",
    message: "The real-time updates have saved me countless times from being late to important classes.",
    avatar: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c",
  },
  {
    name: "Maria Rodriguez",
    role: "Undergraduate",
    message: "The community features are amazing! I've met great friends through the app who help each other navigate the city.",
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} className="h-full">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.message}"</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

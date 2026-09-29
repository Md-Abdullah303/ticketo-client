import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { ToastContainer } from "react-toastify";

export default async function HomePage() {
  const stats = {
    totalOrgs: 12,
    totalAttendees: 100,
    totalEvents: 3,
  };
  return (
    <div>
      <Hero />
      <WhyChoose />
      <Statistics stats={stats} />
      <Testimonials />
      <ToastContainer />
    </div>
  );
}

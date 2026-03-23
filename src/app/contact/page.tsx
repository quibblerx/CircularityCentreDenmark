import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:mt-8">
            <ContactDetails />
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Mail, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="text-black">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="mb-4">
        Do you have questions about Circularity Centre Denmark?
        <br />
        Do you want to get involved?
      </p>
      <p className="mb-8">We&apos;re here to help.</p>

      <div className="flex items-center gap-4 mb-4">
        <Mail size={20} />
        <a
          href="mailto:contact@circularitycentre.dk"
          className="hover:underline"
        >
          contact@circularitycentre.dk
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Phone size={20} />
        <span>+45 xx xx xx xx</span>
      </div>
    </div>
  );
}

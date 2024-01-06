import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div
      className="container mx-auto px-5 py-10 flex flex-col items-center"
      id="faqs"
    >
      <h2 class="mb-3">FAQs</h2>
      <Accordion type="single" collapsible className="w-[100%] md:w-[50%]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start">
            Is Shotune Free?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Yes! Shotune offers a free version with robust features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start">
            Do I need an account to use Shotune?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            No accounts required for the free-tier. An account is only required
            for the Pro versions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start">
            Does Shotune store or access my snaps on the server?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            No. Shotune operates locally, ensuring your privacy. We only store
            your images on our servers when you save a snap.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start">
            Is a credit card required to try Shotune Free?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            No credit card needed for the free version.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start">
            What payment methods do you support?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Various payment options are available for our premium version.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-start">
            Can I get help from a real person?
          </AccordionTrigger>
          <AccordionContent className="text-start">
            Absolutely! Our support team is here to assist you. You can reach
            out to us through out email Shotune@gmail.com
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;

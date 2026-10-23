import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHeader, WhatsAppLink } from "@/components/ui";
import { contact, enquiryTopics } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us: Ecommerce Agency in New Delhi",
  description: "Tell us about your brand. Enquire about Shopify, performance marketing, WhatsApp, sales support, SEO or a Lookify demo.",
  alternates: { canonical: "/contact" },
};

const next = ["You tell us about your brand and goals.", "A strategist reviews your store and channels.", "We set up a call with a clear recommendation."];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Work with us" title="Tell us about your brand.">
        <p>Two minutes, five fields. Prefer to talk? WhatsApp or call us.</p>
      </PageHeader>
      <div className="container-x grid gap-12 pb-24 md:grid-cols-[1.4fr_1fr]">
        <Suspense fallback={<div aria-busy className="min-h-[44rem] rounded-2xl bg-white md:min-h-[34rem]" />}>
          <EnquiryForm topics={enquiryTopics} />
        </Suspense>
        <aside className="space-y-10">
          <div>
            <h2 className="eyebrow">What happens next</h2>
            <ol className="mt-4 space-y-3">
              {next.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-display text-xl text-plum">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="eyebrow">Talk to us directly</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <WhatsAppLink location="contact_page" />
              </li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-plum">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-plum">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Visit</h2>
            <address className="mt-4 not-italic text-muted">{contact.address}</address>
          </div>
        </aside>
      </div>
    </>
  );
}

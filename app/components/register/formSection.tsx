"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";

import { Button } from "@/components/ui/button";
import TextField from "./textField";
import PhoneInputField from "./phoneInputFiled";
import { countries } from "./utils/countries";
import { validationSchema } from "./utils/formValidationSchema";
import { event } from "@/lib/gtag";

type FormTypes =
  | "enquiry"
  | "delegates"
  | "exhibitors"
  | "sponsor"
  | "participants"
  | "awards";


// ✅ Component to inject UTM parameters
const UTMSetter = () => {
  const { setFieldValue } = useFormikContext<any>();
  const searchParams = useSearchParams();

  useEffect(() => {
    setFieldValue("utm_source", searchParams.get("utm_source") || "");
    setFieldValue("utm_medium", searchParams.get("utm_medium") || "");
    setFieldValue("utm_campaign", searchParams.get("utm_campaign") || "");
  }, [searchParams, setFieldValue]);

  return null;
};

const FormSection = ({ type }: { type: FormTypes }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (values: any) => {
    setSubmitting(true);
    router.push(`/register/thankyou?type=${type}`);

    try {
      setTimeout(() => {
        fetch(`/api/${type}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then(() => {
            event({
              action: "form_submit",
              category: "lead",
              label: type,
            });
          })
          .catch((error) => {
            console.error("Background submission error:", error);
          });
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        country: "",
        phone: "",
        jobTitle: "",
        message: "",
        consent1: true,
        consent2: true,
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="text-black">
        <UTMSetter />
        <div className="flex w-full flex-col gap-0 md:flex-row md:gap-4">
          <TextField
            name="name"
            label="Name"
            placeholder="Full Name"
            autoComplete="name"
            required
          />
          <TextField
            name="jobTitle"
            label="Job Title"
            placeholder="Job Title"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-0 md:flex-row md:gap-4">
          <TextField
            name="email"
            label="Work Email"
            type="email"
            autoComplete="email"
            placeholder="Work Email Address"
            required
          />
          <PhoneInputField name="phone" />
        </div>
        <div className="flex w-full flex-col gap-0 md:flex-row md:gap-4">
          <TextField
            name="companyName"
            label="Company Name"
            placeholder="Company Name"
            autoComplete="organization"
            required
          />
          <TextField
            name="country"
            label="Country"
            as="select"
            options={countries.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />
        </div>
{type === "awards" && (
  <div className="text-black">
    <TextField
      name="awardCategory"
      label="Award Category"
      as="select"
      options={[
        { value: "Innovative Developer of the Year", label: "Innovative Developer of the Year" },
        { value: "Innovation in Smart Urban Development", label: "Innovation in Smart Urban Development" },
        { value: "Digital Transformation in Property Management", label: "Digital Transformation in Property Management" },
        { value: "Best HVAC Innovation in Real Estate", label: "Best HVAC Innovation in Real Estate" },
        { value: "Real Estate Brand of the Year highest inventory", label: "Real Estate Brand of the Year highest inventory" },
        { value: "Smart Integrated Development of the Year", label: "Smart Integrated Development of the Year" },
        { value: "PropTech Integration by a Real Estate Agency", label: "PropTech Integration by a Real Estate Agency" },
        { value: "Smart Building Project of the Year", label: "Smart Building Project of the Year" },
        { value: "Real Estate Collaboration of the Year", label: "Real Estate Collaboration of the Year" },
        { value: "ESG-Focused Real Estate Initiative", label: "ESG-Focused Real Estate Initiative" },
        { value: "Technology Innovation in PropTech", label: "Technology Innovation in PropTech" },
        { value: "PropTech Startup of the Year", label: "PropTech Startup of the Year" },
        { value: "Best Use of AI in Real Estate", label: "Best Use of AI in Real Estate" },
        { value: "Blockchain Innovation in Real Estate", label: "Blockchain Innovation in Real Estate" },
        { value: "Tokenization Platform of the Year", label: "Tokenization Platform of the Year" },
        { value: "Digital Twin or Virtual Modelling Excellence", label: "Digital Twin or Virtual Modelling Excellence" },
        { value: "Top Real Estate Data & Analytics Platform", label: "Top Real Estate Data & Analytics Platform" },
        { value: "IoT/Smart Infrastructure Solution of the Year", label: "IoT/Smart Infrastructure Solution of the Year" },
        { value: "SaaS Solution of the Year (for Real Estate)", label: "SaaS Solution of the Year (for Real Estate)" },
        { value: "Cybersecurity & Data Protection in Real Estate Tech", label: "Cybersecurity & Data Protection in Real Estate Tech" },
        { value: "Best Overall PropTech Innovation", label: "Best Overall PropTech Innovation" },
      ]}
      required={true}
    />
  </div>
)}

        <TextField
          name="message"
          label="Message (if any)"
          as="textarea"
          rows={3}
          placeholder="Write your message..."
        />

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent1"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              I confirm that I have read, understand and accept the{" "}
              <a href="/terms" target="_blank" className="underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacypolicy"
                target="_blank"
                className="underline"
              >
                Privacy Policy
              </a>
              .<span className="text-red-500">*</span>
            </p>
          </label>
          <ErrorMessage
            name="consent1"
            component="p"
            className="mt-1 text-xs text-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent2"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              I consent to having my data processed for event communication.
              <span className="text-red-500">*</span>
            </p>
          </label>
          <ErrorMessage
            name="consent2"
            component="p"
            className="mt-1 text-xs text-red-500"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            disabled={submitting}
            className="rounded-none border border-black bg-transparent px-8 text-black hover:bg-gray-50"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormSection;

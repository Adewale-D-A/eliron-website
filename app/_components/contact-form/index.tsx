"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import TextInput from "../form-fields/input";
import TextAreaInput from "../form-fields/textArea";
import SuccessModal from "./successMessage";
import emailjs from "@emailjs/browser";
import { MailWarning } from "lucide-react";
import { Button } from "../button";
import SelectField from "../form-fields/select";
import contactReasons from "@/app/_assets/contact-reasons.json";

export default function ContactForm({
  closeModal,
  reasonId,
}: {
  closeModal?: Function;
  reasonId?: string;
}) {
  const form = useRef(null) as any;

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC || "";

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("Others");
  const [message, setMessage] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);

  // Pre-populate  message field based on option selected
  useEffect(() => {
    const found = contactReasons.find((it) => it.id === reasonId);
    if (found) {
      setOption(found.value);
      setMessage(found.message_template || "");
    }
  }, [reasonId]);

  const submit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrorMessage("");
      // const payload = {
      //   fullname: fullname,
      //   company: company,
      //   phone_number: phone,
      //   email: email,
      //   message: message,
      // };
      try {
        await emailjs.sendForm(
          service_id,
          template_id,
          form.current || "",
          public_key,
        );
        setOpenSuccess(true);
        setFullname("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
        setLinkedIn("");
        setScheduleDate("");
        setOption("Others");
      } catch (error) {
        setErrorMessage("please try again later");
      } finally {
        setIsSubmitting(false);
      }
    },
    [service_id, template_id, public_key, form],
  );

  const handleReasonSelection = (e: string) => {
    setOption(e);
    const found = contactReasons.find((it) => it.value === e);
    if (found) {
      setMessage(found.message_template || "");
    }
  };
  return (
    <>
      <form ref={form} className=" flex flex-col gap-5" onSubmit={submit}>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              id: "fullname",
              label: "Full name",
              placeholder: "John Doe",
              type: "text",
              isRequired: true,
              state: fullname,
              setState: setFullname,
            },
            {
              id: "company",
              label: "Company name (optional)",
              placeholder: "John inc.",
              type: "text",
              isRequired: false,
              state: company,
              setState: setCompany,
            },
            {
              id: "linkedin",
              label: "Enterprise LinkedIn (optional)",
              placeholder: "https://linkin...",
              type: "text",
              isRequired: false,
              state: linkedIn,
              setState: setLinkedIn,
            },
            {
              id: "phone_number",
              label: "Phone",
              placeholder: "000000000000000",
              type: "number",
              isRequired: true,
              state: phone,
              setState: setPhone,
            },
            {
              id: "email",
              label: "Email",
              placeholder: "example@example.com",
              type: "email",
              isRequired: true,
              state: email,
              setState: setEmail,
            },
            {
              id: "schedule_date",
              label: "Schedule A Date",
              placeholder: "",
              type: "date",
              isRequired: true,
              state: scheduleDate,
              setState: setScheduleDate,
            },
          ].map((item) => (
            <TextInput
              key={item?.id}
              name={item?.id}
              inputType={item?.type}
              value={item?.state}
              setValue={item?.setState}
              label={item?.label}
              placeholder={item?.placeholder}
              isRequired={item?.isRequired}
              id={item?.id}
            />
          ))}
        </div>
        <div className="w-full space-y-5">
          <SelectField
            value={option}
            onChange={handleReasonSelection}
            label="Contact Reason"
            id="selected_reason"
            isRequired={true}
          >
            {contactReasons.map((it) => (
              <option key={it.id} value={it.value}>
                {it.label}
              </option>
            ))}
          </SelectField>
          <TextAreaInput
            value={message}
            name="message"
            setValue={setMessage}
            isRequired={true}
            id="message"
            label="Message"
            placeholder="Type message here"
          />
        </div>
        {errorMessage && (
          <div className=" text-red-500 text-center flex items-center justify-center gap-4">
            <MailWarning />
            <p>{errorMessage}</p>
          </div>
        )}
        <div className=" w-full flex justify-end">
          <Button
            type="submit"
            title="submit"
            className=" w-fit"
            isLoading={isSubmitting}
          >
            Submit message
          </Button>
        </div>
      </form>
      <SuccessModal
        openSuccessModal={openSuccess}
        setOpenSuccessModal={setOpenSuccess}
        closeMainModal={closeModal}
      />
    </>
  );
}

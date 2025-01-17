"use client"
import { formatPlainText } from "@/utils/extras";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from 'quill';
import QuillNoSSRWrapper from "./QuillEditor";
// import QuillEmoji from 'quill-emoji';

// Register the emoji module with Quill
// Quill.register('modules/emoji', QuillEmoji);
type Props = {
  setValue: () => void;
  value: string;
};
const TextEditor = ({ setValue, value }: Props) => {


  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["clean"],
    ],

  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "indent",
    "align",
  ];

  // Copy HTML formatted content to clipboard
  const copyToClipboard = () => {
    const plainTextMessage = formatPlainText(value);
    navigator.clipboard
      .writeText(plainTextMessage)
      .then(() => {
        alert("Formatted text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Open WhatsApp with plain text message
  const sendToWhatsApp = () => {
    const plainTextMessage = value.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags for WhatsApp
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
      plainTextMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <QuillNoSSRWrapper
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        className="h-36 text-sm  text-grey-700"
        placeholder="Enter a message....."

      />
      {/* <button onClick={copyToClipboard} style={{ marginTop: "20px" }}>
        Copy Formatted Text
      </button>
      <button
        onClick={sendToWhatsApp}
        style={{ marginTop: "20px", marginLeft: "10px" }}
      >
        Send to WhatsApp
      </button> */}
    </div>
  );
};

export default TextEditor;

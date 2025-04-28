"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      {formState === "success" ? (
        <div className="bg-white p-6 rounded-lg border border-stone-300 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-4 text-stone-700"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3 className="text-xl font-bold mb-2 text-stone-800">Message Received</h3>
          <p className="text-stone-600 mb-6">Thank you for reaching out. I'll respond to your inquiry soon.</p>
          <Button
            variant="outline"
            onClick={() => setFormState("idle")}
            className="border-stone-300 hover:bg-stone-200 hover:text-stone-900"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-stone-300">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-stone-300">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              required
              className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-stone-300">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your thoughts, questions, or proposals..."
              rows={5}
              required
              className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
            />
          </div>
          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-stone-200 hover:bg-white text-stone-800 font-medium py-2.5"
          >
            {formState === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  )
}

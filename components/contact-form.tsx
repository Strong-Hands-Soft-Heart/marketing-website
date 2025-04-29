'use client';

import type React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ContactForm() {
  const [state, handleSubmit] = useForm('mzzrdgpe');

  if (state.succeeded) {
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-stone-800 p-6 rounded-lg border border-stone-600 shadow-lg text-center">
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
            className="mx-auto mb-4 text-white"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3 className="text-xl font-bold mb-2 text-white">Message Received</h3>
          <p className="text-stone-200 mb-6">
            Thank you for reaching out. I'll respond to your inquiry soon.
          </p>
          <Button
            onClick={() => (window.location.href = '/')}
            className="bg-white text-stone-800 border border-stone-400 hover:bg-stone-200 hover:text-stone-900 font-semibold"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Begin Your Journey</h2>
        <p className="text-stone-300 text-lg">
          Whether you're building something or simply curious, we'd love to hear from you. Speak
          from the heart.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-stone-300">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-400 text-sm"
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
              placeholder="your.email@example.com"
              required
              className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-stone-300">
            Subject
          </Label>
          <Select name="subject" required>
            <SelectTrigger className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white">
              <SelectValue placeholder="What is this regarding?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soap">Soap Collaboration</SelectItem>
              <SelectItem value="music">Music Licensing / Studio</SelectItem>
              <SelectItem value="tech">Tech + Dev</SelectItem>
              <SelectItem value="mentorship">Mentorship</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-stone-300">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Share your thoughts, questions, or proposals..."
            rows={5}
            required
            className="bg-stone-600 border-stone-500 focus:border-stone-400 focus:ring-stone-400 text-white placeholder:text-stone-400"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-stone-200 hover:bg-white text-stone-800 font-medium py-2.5"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}

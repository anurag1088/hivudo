"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Play, CheckCircle, Users, Star, Zap, Shield, ArrowRight, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { EditorCard } from "@/components/editor-card"
import { Button } from "@/components/ui/button"
import { editors, niches } from "@/lib/data"

const popularSearches = [
  "YouTube video editor for gaming content",
  "Wedding film editor with cinematic style",
  "Reels and shorts editor for Instagram",
  "Corporate video editor for presentations",
  "Music video editor with motion graphics",
  "Podcast video editor with animations",
]

const categories = [
  { name: "YouTube Videos", icon: "🎬" },
  { name: "Wedding Films", icon: "💒" },
  { name: "Reels & Shorts", icon: "📱" },
  { name: "Corporate", icon: "💼" },
  { name: "Music Videos", icon: "🎵" },
  { name: "Documentaries", icon: "🎥" },
]

const testimonials = [
  {
    quote: "Hivudo helped us find a brilliant editor who understood our brand. Our YouTube channel grew 3x in 6 months thanks to the quality of edits.",
    author: "Priya Sharma",
    role: "YouTuber, 500K subscribers",
    company: "TechReview India",
  },
  {
    quote: "As a wedding filmmaker, finding reliable editors was always a challenge. With Hivudo, I have a team of skilled editors I can count on for every project.",
    author: "Rahul Verma",
    role: "Founder",
    company: "Dreamlight Films",
  },
  {
    quote: "The quality of editors on Hivudo is exceptional. We hired two full-time editors through the platform and they have been with us for over a year now.",
    author: "Ananya Patel",
    role: "Content Head",
    company: "BrandStory Media",
  },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"hire" | "work">("hire")
  const featuredEditors = editors.slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-video-editor.jpg"
          alt="Video editor working with multiple monitors"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">500+ Verified Editors</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
            Hire the video editors your content needs
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Access skilled Indian video editors ready to help you create and scale — without the full-time commitment
          </p>

          {/* Tabs */}
<div className="inline-flex p-1 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30">
  <button
    onClick={() => setActiveTab("hire")}
    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
      activeTab === "hire"
        ? "bg-white text-black shadow-lg"
        : "text-white hover:bg-white/10"
    }`}
  >
    For clients
  </button>
  <button
    onClick={() => setActiveTab("work")}
    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
      activeTab === "work"
        ? "bg-white text-black shadow-lg"
        : "text-white hover:bg-white/10"
    }`}
  >
    For editor
  </button>
</div>

{/* Search OR Explore Works button based on tab */}
{activeTab === "hire" ? (
  <div className="max-w-2xl mx-auto">
    <SearchBar large />
  </div>
) : (
  <div className="flex justify-center">
    <Link href="/work">
      <button className="px-16 py-4 bg-white text-black font-semibold rounded-xl text-lg hover:bg-white/90 transition-all shadow-lg">
        Explore Works
      </button>
    </Link>
  </div>
)}

          {/* Popular Searches */}
          <div className="mt-8">
            <p className="text-sm font-medium text-white/70 mb-4">Popular searches</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.slice(0, 3).map((search) => (
                <Link
                  key={search}
                  href={`/browse?q=${encodeURIComponent(search)}`}
                  className="text-sm text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all backdrop-blur-sm"
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Find editors for every type of content</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/browse?niche=${encodeURIComponent(category.name)}`}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Skills */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Find editors by relevant skills</h2>
          <div className="flex flex-wrap gap-3">
            {niches.map((niche) => (
              <Link
                key={niche}
                href={`/browse?niche=${encodeURIComponent(niche)}`}
                className="px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {niche}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">How it works</h2>
          <p className="text-muted-foreground mb-12">Get your video edited in 3 simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Post your project for free",
                description: "Describe your video editing needs, upload samples, and set your budget. Get matched with relevant editors.",
                cta: "Post a project",
                href: "/signup"
              },
              {
                step: "2",
                title: "Review proposals and hire",
                description: "Browse portfolios, compare rates, and chat with editors. Hire the perfect match for your project.",
                cta: "Explore editors",
                href: "/browse"
              },
              {
                step: "3",
                title: "Pay when work is done",
                description: "Release payment after approving the final edit. Request revisions until you are 100% satisfied.",
                cta: "View pricing",
                href: "#"
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-background rounded-2xl p-8 border border-border">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Link href={item.href} className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  {item.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Editors */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Top-rated video editors</h2>
              <p className="mt-1 text-muted-foreground">Hand-picked editors ready to start your project</p>
            </div>
            <Link href="/browse">
              <Button variant="outline" className="hidden sm:flex items-center gap-2 border-border text-foreground hover:bg-secondary">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEditors.map((editor) => (
              <EditorCard key={editor.id} editor={editor} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/browse">
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                View All Editors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground">Choose how you want to hire</h2>
            <p className="mt-2 text-muted-foreground">Flexible options designed to fit your hiring needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground">Basic</h3>
              <p className="text-muted-foreground mt-1">For occasional hiring and one-off projects</p>
              <div className="my-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">Hire skilled editors fast without long-term commitments or extra overhead.</p>
              </div>
              <p className="text-sm font-medium text-foreground mb-4">Basic includes:</p>
              <ul className="space-y-3">
                {[
                  "Marketplace access - editors across all niches",
                  "Editor profiles - portfolios, ratings, and work history",
                  "Direct messaging with editors",
                  "Secure payment protection",
                  "Revision requests included"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8" variant="outline">
                Get started for free
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-background rounded-2xl p-8 border-2 border-primary relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-bold text-foreground">Business Plus</h3>
              <p className="text-muted-foreground mt-1">For ongoing work, repeat hiring, and teams</p>
              <div className="my-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">Premium tools, vetted talent, and team controls for running projects at scale.</p>
              </div>
              <p className="text-sm font-medium text-foreground mb-4">Everything in Basic, plus:</p>
              <ul className="space-y-3">
                {[
                  "Curated shortlists - we surface top matches",
                  "Expert-Vetted talent - access to top 1% editors",
                  "Team workspace - shared hiring with roles",
                  "Priority support - faster help when needed",
                  "Dedicated account manager"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-primary hover:bg-primary/90">
                Get started for free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-10">Proven results on Hivudo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-foreground italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            Find editors who can help you create what&apos;s next
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Join thousands of clients who trust Hivudo for their video editing needs.
          </p>
          <div className="mt-8">
            <Link href="/browse">
              <Button size="lg" variant="secondary" className="px-8">
                Explore Editors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

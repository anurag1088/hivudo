"use client"

import { useUser } from "@clerk/nextjs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Share2, Star, Clock, Briefcase, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const { user } = useUser()

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Please log in to view your profile.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-24 pb-16">

        {/* Profile Header */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={user.imageUrl}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-border"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {user.fullName || user.firstName || "Your Name"}
                </h1>
                <p className="text-muted-foreground text-sm">@{user.username || "username"}</p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">India</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground">
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Title and Rate */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div>
              <p className="font-semibold text-foreground">Video Editor</p>
              <p className="text-sm text-muted-foreground">Add your professional title</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground text-lg">₹500<span className="text-sm font-normal text-muted-foreground">/video</span></p>
              <p className="text-sm text-muted-foreground">Per video rate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col gap-6">

            {/* Stats */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-semibold text-foreground mb-4">Quick Stats</h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">No reviews yet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">0 jobs completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Response within 2 hrs</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Skills</h2>
                <button className="text-primary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Languages</h2>
                <button className="text-primary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">Conversational</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">Hindi</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Profile Overview */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Profile Overview</h2>
                <button className="text-primary text-sm">Edit</button>
              </div>
              <p className="text-muted-foreground text-sm">
                Tell clients about your experience, skills, and what makes you unique as a video editor...
              </p>
            </div>

            {/* Portfolio */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-foreground">Portfolio</h2>
                  <div className="flex gap-4 mt-1">
                    <button className="text-sm text-primary border-b-2 border-primary pb-1">Published</button>
                    <button className="text-sm text-muted-foreground pb-1">Drafts</button>
                  </div>
                </div>
                <button className="text-primary">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground text-sm mb-2">No portfolio items yet</p>
                <p className="text-xs text-muted-foreground mb-4">Add your best video work to attract clients</p>
                <Button variant="outline" size="sm">
                  Add a project
                </Button>
              </div>
            </div>

            {/* Work History */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-semibold text-foreground mb-4">Work History</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground text-sm">No work history yet</p>
                <p className="text-xs text-muted-foreground mt-1">Completed projects will appear here</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
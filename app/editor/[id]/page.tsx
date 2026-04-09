import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Clock, MapPin, CheckCircle, Play, ArrowLeft, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getEditorById, editors } from "@/lib/data"

interface EditorPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return editors.map((editor) => ({
    id: editor.id,
  }))
}

export default async function EditorPage({ params }: EditorPageProps) {
  const { id } = await params
  const editor = getEditorById(id)

  if (!editor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/browse"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary/30 to-accent/30" />
                <CardContent className="p-6 -mt-16">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative h-32 w-32 flex-shrink-0">
                      <Image
                        src={editor.photo}
                        alt={editor.name}
                        fill
                        className="rounded-xl object-cover ring-4 ring-card"
                      />
                    </div>
                    <div className="flex-1 pt-4 sm:pt-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h1 className="text-2xl font-bold text-foreground">{editor.name}</h1>
                          <p className="text-primary font-medium">{editor.niche}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 rounded-full">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="font-semibold text-foreground">{editor.rating}</span>
                            <span className="text-muted-foreground text-sm">({editor.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {editor.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {editor.deliveryDays} day{editor.deliveryDays > 1 ? 's' : ''} delivery
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Verified Editor
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{editor.about}</p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {editor.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Portfolio</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {editor.portfolio.map((item, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Play className="h-6 w-6 text-white fill-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white text-sm font-medium">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-foreground">Reviews</h2>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold text-foreground">{editor.rating}</span>
                      <span className="text-muted-foreground">({editor.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {editor.reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="relative h-10 w-10 flex-shrink-0">
                            <Image
                              src={review.clientPhoto}
                              alt={review.clientName}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-foreground">{review.clientName}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString('en-IN', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3.5 w-3.5 ${
                                    i < review.rating
                                      ? 'fill-yellow-500 text-yellow-500'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="mt-2 text-muted-foreground text-sm">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-foreground">
                        ₹{editor.pricePerVideo.toLocaleString('en-IN')}
                      </span>
                      <span className="text-muted-foreground">/video</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {editor.deliveryDays} day{editor.deliveryDays > 1 ? 's' : ''} delivery
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited revisions</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">Source files included</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">Commercial usage rights</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground h-12 text-lg">
                      Hire Now
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full mt-3 border-border text-foreground hover:bg-secondary"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Editor
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time</span>
                        <span className="text-foreground">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Languages</span>
                        <span className="text-foreground">English, Hindi</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Member Since</span>
                        <span className="text-foreground">Jan 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Active</span>
                        <span className="text-foreground">Online now</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

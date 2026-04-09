import Image from "next/image"
import Link from "next/link"
import { Star, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Editor } from "@/lib/data"

interface EditorCardProps {
  editor: Editor
}

export function EditorCard({ editor }: EditorCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <Image
                src={editor.photo}
                alt={editor.name}
                fill
                className="rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Link href={`/editor/${editor.id}`}>
                <h3 className="font-semibold text-foreground truncate hover:text-primary transition-colors">
                  {editor.name}
                </h3>
              </Link>
              <p className="text-sm text-primary font-medium">{editor.niche}</p>
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {editor.location}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="font-medium text-foreground">{editor.rating}</span>
              <span className="text-muted-foreground text-sm">({editor.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{editor.deliveryDays} day{editor.deliveryDays > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {editor.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-foreground">
                ₹{editor.pricePerVideo.toLocaleString('en-IN')}
              </span>
              <span className="text-muted-foreground text-sm">/video</span>
            </div>
            <Link href={`/editor/${editor.id}`}>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
                Hire Now
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

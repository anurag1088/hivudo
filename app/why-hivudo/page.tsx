import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, CheckCircle, Star, Zap, Users, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhyHivudoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4 bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">India's most trusted video editor platform</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why choose Hivudo over Fiverr and Upwork?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hivudo is built specifically for Indian creators and businesses. Faster hiring, verified editors, and payments protected — all in one place.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Hivudo vs the rest
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-primary font-bold text-lg">Hivudo</span>
                  </th>
                  <th className="p-4 text-center text-muted-foreground">Fiverr</th>
                  <th className="p-4 text-center text-muted-foreground">Upwork</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["India focused platform", true, false, false],
                  ["Per video pricing in rupees", true, false, false],
                  ["Instant hire — no bidding", true, true, false],
                  ["Verified Indian editors", true, false, false],
                  ["Payment protection", true, true, true],
                  ["Hindi support", true, false, false],
                  ["Free to post a project", true, true, false],
                  ["Dedicated editor profiles", true, true, true],
                ].map(([feature, hivudo, fiverr, upwork], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                    <td className="p-4 text-foreground font-medium">{feature}</td>
                    <td className="p-4 text-center">
                      {hivudo ? (
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {fiverr ? (
                        <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {upwork ? (
                        <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-xl">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Protection */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">How Hivudo protects your payment</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Your money is always safe. We hold your payment securely until you are 100% happy with the work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="h-6 w-6 text-primary" />,
                title: "Escrow protection",
                desc: "Your payment is held securely and only released to the editor after you approve the final video."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                title: "Free revisions",
                desc: "Not happy with the edit? Request revisions for free until the video meets your expectations."
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Full refund guarantee",
                desc: "If the editor fails to deliver or you are not satisfied, you get a complete refund. No questions asked."
              },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor Verification */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">How editors are verified on Hivudo</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Every editor on Hivudo goes through a strict verification process before they can take on any project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Portfolio review",
                desc: "Every editor submits at least 3 real video samples. Our team manually reviews each one for quality, creativity, and skill."
              },
              {
                step: "02",
                title: "Identity verification",
                desc: "Editors verify their identity with a government ID. No fake profiles or anonymous accounts allowed on Hivudo."
              },
              {
                step: "03",
                title: "Skill assessment",
                desc: "Editors complete a test edit on a sample clip. Only those who pass our quality bar get the Verified badge."
              },
              {
                step: "04",
                title: "Ongoing rating system",
                desc: "Every completed project earns a client review. Editors who fall below our quality standard are removed from the platform."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-card rounded-2xl p-6 border border-border">
                <div className="text-3xl font-bold text-primary/30">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to hire with confidence?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Join thousands of Indian creators who trust Hivudo for their video editing needs.
          </p>
          <Link href="/browse">
            <Button size="lg" variant="secondary" className="px-8">
              Browse Editors
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
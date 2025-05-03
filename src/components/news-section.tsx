import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsSection() {
  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Parish News & Events</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Stay updated with the latest happenings in our community.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pascha Service Schedule</CardTitle>
              <CardDescription>April 15, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join us for Holy Week and Pascha services. Special schedule now available.</p>
            </CardContent>
            <CardFooter>
              <Link href="/news/pascha-schedule">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Church School Registration</CardTitle>
              <CardDescription>April 10, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Registration for the 2025-2026 church school year is now open for children ages 4-18.</p>
            </CardContent>
            <CardFooter>
              <Link href="/news/school-registration">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Parish Picnic</CardTitle>
              <CardDescription>April 5, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Annual parish picnic scheduled for June 12th. All parishioners and friends welcome!</p>
            </CardContent>
            <CardFooter>
              <Link href="/news/parish-picnic">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/news">
            <Button className="mt-4">View All News</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

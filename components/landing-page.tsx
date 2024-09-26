'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Code, Database, Globe, Mail, Linkedin, Github, PieChart, Braces } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <span className="sr-only">Nicolás Vaquero</span>
            <span className="font-bold text-xl text-gray-800">NV</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4" href="#experience">
              Experience
            </Link>
            <Link className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4" href="#skills">
              Skills
            </Link>
            <Link className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4" href="#interests">
              Interests
            </Link>
            <Link className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Nicolás Vaquero
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Data Analyst
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gray-800 text-white hover:bg-gray-700" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" className="text-gray-800 border-gray-800 hover:bg-gray-100" asChild>
                  <Link href="#experience">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900">Experience</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Business Analyst</CardTitle>
                  <CardDescription className="text-gray-600">JD Edwards Specialist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Extensive experience working with JD Edwards for a North America-based client. Specialized in
                    analyzing business processes and implementing ERP solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Web Developer</CardTitle>
                  <CardDescription className="text-gray-600">CTD Program Graduate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Completed the Certified Tech Developer (CTD) program by Digital House, in collaboration with
                    Mercado Libre and Globant. Gained hands-on experience in web development technologies and best
                    practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900">Skills</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <BarChart className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">Business Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Process modeling, requirements gathering, data analysis, and project management.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">JD Edwards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">ERP implementation, customization, and optimization for enterprise-level solutions.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <Code className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">HTML, CSS, JavaScript, React, Next.js, and modern web frameworks for building responsive applications.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">SQL for database management and querying, Python for data analysis and manipulation.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <PieChart className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">Data Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Power BI and Tableau for creating interactive dashboards and insightful data visualizations.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <Braces className="w-8 h-8 mb-2 text-gray-800" />
                  <CardTitle className="text-gray-800">Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Python for scripting, data analysis, and backend development. JavaScript for frontend and full-stack development.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="interests" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900">Current Interests</h2>
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <Database className="w-8 h-8 mb-2 text-gray-800" />
                <CardTitle className="text-gray-800">Data Science and Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Currently focusing on transitioning into the world of data. Interested in data analysis, machine
                  learning, and leveraging data-driven insights to solve complex business problems. Exploring advanced
                  applications of SQL, Python, Power BI, and Tableau in real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="text-gray-800 border-gray-300 hover:bg-gray-100" asChild>
                  <Link href="mailto:nicolasvaquero96@gmail.com">
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="text-gray-800 border-gray-300 hover:bg-gray-100" asChild>
                  <Link href="https://www.linkedin.com/in/nicolasvaquero">
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="text-gray-800 border-gray-300 hover:bg-gray-100" asChild>
                  <Link href="https://github.com/nicolasvaquero">
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-500">© 2024 Nicolás Vaquero. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#experience">
            Experience
          </Link>
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#interests">
            Interests
          </Link>
          <Link className="text-xs text-gray-500 hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
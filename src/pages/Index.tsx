import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import heroBackground from '@/assets/hero-background.jpg';
import { ArrowRight, Heart, Users, Scale, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-primary-foreground">
          <h1 className="mb-6 font-display">
            Building a More Just, Democratic, and Pluralistic Society
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Rooted in the legacy of Donald and Carole Chaiken, we invest in bold ideas and 
            enduring partnerships that strengthen communities for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/mission">
                Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">A Legacy of Principled Philanthropy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In 26 years of dedicated philanthropy, Donald and Carole Chaiken directed over 4,200 grants—building 
              a legacy defined by principled giving, public responsibility, and a deep commitment to human dignity.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Mission & Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Discover our commitment to justice, equity, and human dignity.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/mission">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Honor the visionary leadership of Donald and Carole Chaiken.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/legacy">Explore Legacy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Ten foundational principles guiding our philanthropic work.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/values">View Values</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Areas of Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Strategic investments in democracy, women's rights, and community.
                </CardDescription>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/areas-of-focus">See Focus Areas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about our work or get in touch to explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/board">Meet Our Board</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';
import heroBackground from '@/assets/hero-background.jpg';
import abstractBackground from '@/assets/abstract-background.jpg';
import jewishFederationCommunity from '@/assets/jewish-federation-community.jpg';
import foundationWork2 from '@/assets/foundation-work-2.jpg';
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
          <h1 className="mb-6 font-display text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
            The Chaiken Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed text-primary-foreground">
            Investing in bold ideas and enduring partnerships to strengthen communities for generations to come.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding relative">
        <div className="absolute inset-0 opacity-5">
          <img src={abstractBackground} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="mb-6">A Legacy of Principled Philanthropy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Over 26 years of dedicated philanthropy, Donald and Carole Chaiken directed more than 4,200 grants—building 
              a legacy defined by principled giving, public responsibility, and a deep commitment to human dignity, now 
              carried forward through the mission of the <span className="whitespace-nowrap">Chaiken Foundation</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Mission & Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Discover our commitment to justice, equity, and human dignity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Honor the visionary leadership of Donald and Carole Chaiken.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Ten foundational principles guiding our philanthropic work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Areas of Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Strategic investments in democracy, women's rights, and community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Foundation Work */}
      <section className="section-padding bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Our Impact in Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Witness the transformative power of strategic philanthropy through our community partnerships and initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img src={jewishFederationCommunity} alt="Community service and volunteer work" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
                  <p className="text-sm opacity-90">Supporting grassroots organizations and volunteer initiatives that create lasting change in local communities.</p>
                </div>
              </div>
            </Card>
            
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <img src={foundationWork2} alt="Educational programs and mentorship" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">Educational Innovation</h3>
                  <p className="text-sm opacity-90">Investing in educational programs and mentorship opportunities that empower individuals and strengthen communities.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;

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
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Dynamic Diagonal Background */}
        <div 
          className="absolute top-0 left-0 w-[150%] h-[150%] bg-cover bg-center bg-no-repeat transform -rotate-12 origin-left scale-110"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: 'rotate(-12deg) translateX(-20%) translateY(-10%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-primary-foreground">
          <h1 className="mb-6 font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
            The Chaiken Foundation
          </h1>
          <h2 className="mb-8 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-accent whitespace-nowrap">
            Building a More Just, Democratic, and Pluralistic Society
          </h2>
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
            <Link to="/mission" className="h-full">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/30 border-primary/30 card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Mission & Values</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <CardDescription className="text-center text-foreground/80">
                    Discover our commitment to justice, equity, and human dignity.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/legacy" className="h-full">
              <Card className="bg-gradient-to-br from-accent/25 to-accent/35 border-accent/40 card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Legacy</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <CardDescription className="text-center text-accent-foreground/80">
                    Honor the visionary leadership of Donald and Carole Chaiken.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/values" className="h-full">
              <Card className="bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300 card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Values</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <CardDescription className="text-center text-slate-600">
                    The foundational principles guiding our philanthropic work.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/areas-of-focus" className="h-full">
              <Card className="bg-gradient-to-br from-primary/15 via-accent/15 to-primary/20 border-primary/25 card-shadow hover:hover-shadow transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">Focus</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center">
                  <CardDescription className="text-center text-foreground/80">
                    Strategic investments in Jewish causes, democracy, women's rights, arts and community.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
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

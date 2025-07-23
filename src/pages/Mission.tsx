import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Heart, Vote, Star, Palette, Target } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import artsImage from '@/assets/arts-culture.jpg';
import democracyImage from '@/assets/democracy.jpg';
import jewishValuesImage from '@/assets/jewish-values.jpg';
import womensRightsImage from '@/assets/womens-rights.jpg';

const Mission = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 text-primary-foreground">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Quote className="w-8 h-8" />
          </div>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Building a more just, democratic, and pluralistic society through principled philanthropy and enduring partnerships
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">A Legacy of Principled Giving</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Chaiken Foundation carries forward the visionary work of Donald and Carole Chaiken, 
                who in 26 years of dedicated philanthropy directed over 4,200 grants—building a legacy 
                defined by principled giving, public responsibility, and a deep commitment to human dignity.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
                <p className="text-xl font-medium text-foreground">
                  Today, we invest in bold ideas and enduring partnerships that strengthen communities 
                  for generations to come, focusing on systemic solutions at the intersection of democracy, 
                  women's rights, and the flourishing of Jewish communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">Our Areas of Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We champion causes that create lasting change and strengthen the fabric of society
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img src={artsImage} alt="Arts and Culture" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <Palette className="w-6 h-6 text-white mr-2" />
                    <h3 className="text-xl font-semibold text-white">Arts & Culture</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of the arts to inspire empathy, foster deeper dialogue, and unite diverse 
                  communities. By supporting creative expression, we help build a society that is both humane and dynamic.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img src={democracyImage} alt="Democratic Values" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <Vote className="w-6 h-6 text-white mr-2" />
                    <h3 className="text-xl font-semibold text-white">Democratic Values</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  We champion efforts that defend democratic institutions, protect civil liberties, and expand access 
                  to opportunity, ensuring that all people can participate fully in civic and cultural life.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img src={jewishValuesImage} alt="Jewish Values" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-6 h-6 text-white mr-2" />
                    <h3 className="text-xl font-semibold text-white">Jewish Values</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the enduring power of Jewish values to inform a more ethical, equitable society and 
                  invest in organizations that foster connection, continuity, and a shared sense of purpose across 
                  generations and borders.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 overflow-hidden">
              <div className="relative h-48">
                <img src={womensRightsImage} alt="Women's Rights" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-white mr-2" />
                    <h3 className="text-xl font-semibold text-white">Women's Rights</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Central to our mission is the advancement of women's rights and leadership. We believe that uplifting 
                  women as changemakers is essential to building strong, inclusive, and resilient societies. When women 
                  lead, communities thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl elegant-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="mb-6">Our Approach</h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Our giving is guided by clarity of values, commitment to impact, and a deep respect for the long arc 
                of change. Through thoughtful grantmaking and collaborative leadership, we strive to help shape a 
                future that is vibrant, inclusive, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
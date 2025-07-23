import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Heart, Vote, Star, Palette } from 'lucide-react';

const Mission = () => {
  return (
    <Layout>
      {/* Hero Section with Mission Title */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-medium mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mission
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main Mission Statement */}
          <div className="mb-16">
            <Card className="card-gradient elegant-shadow p-8 lg:p-12">
              <CardContent className="space-y-8">
                <p className="text-xl leading-relaxed text-center">
                  The Chaiken Foundation is committed to building a more just, democratic, and pluralistic society. 
                  Rooted in the legacy of Donald and Carole Chaiken (Donald and Carole Chaiken Foundation)—visionary 
                  builders, principled leaders, and determined problem-solvers—the Foundation invests in bold ideas 
                  and enduring partnerships that strengthen communities for generations to come.
                </p>

                <div className="bg-accent/10 p-8 rounded-xl border-l-4 border-accent">
                  <p className="text-lg font-medium text-center leading-relaxed">
                    In 26 years of dedicated philanthropy, Donald and Carole Chaiken directed over 4,200 grants—building 
                    a legacy defined by principled giving, public responsibility, and a deep commitment to human dignity. 
                    Today, the Chaiken Foundation carries that legacy forward with the same commitment to long-term, 
                    systemic solutions at the intersection of democracy, women's rights, and the flourishing of Jewish 
                    communities in the U.S., Israel, and around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl font-medium text-primary">Arts & Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center leading-relaxed">
                  We believe in the power of the arts to inspire empathy, foster deeper dialogue, and unite diverse 
                  communities. By supporting creative expression, we help build a society that is both humane and dynamic.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Vote className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-display text-xl font-medium text-accent-foreground">Democratic Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center leading-relaxed">
                  We champion efforts that defend democratic institutions, protect civil liberties, and expand access 
                  to opportunity, ensuring that all people can participate fully in civic and cultural life.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl font-medium text-primary">Jewish Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center leading-relaxed">
                  We believe in the enduring power of Jewish values to inform a more ethical, equitable society and 
                  invest in organizations that foster connection, continuity, and a shared sense of purpose across 
                  generations and borders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-display text-xl font-medium text-accent-foreground">Women's Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center leading-relaxed">
                  Central to our mission is the advancement of women's rights and leadership. We believe that uplifting 
                  women as changemakers is essential to building strong, inclusive, and resilient societies. When women 
                  lead, communities thrive.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <Card className="card-gradient elegant-shadow">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl font-medium leading-relaxed">
                  Our giving is guided by clarity of values, commitment to impact, and a deep respect for the long arc 
                  of change. Through thoughtful grantmaking and collaborative leadership, we strive to help shape a 
                  future that is vibrant, inclusive, and built to last.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
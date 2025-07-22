import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Building, Award, Users } from 'lucide-react';

const Legacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h1 className="mb-6">The Legacy of Donald and Carole Chaiken</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A living testament to visionary leadership, generosity, and dedication to community
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm p-8 lg:p-12 rounded-2xl elegant-shadow">
              <div className="text-center mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
              </div>
              <p className="text-lg leading-relaxed text-center first-letter:text-5xl first-letter:font-display first-letter:font-semibold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                The Donald and Carole Chaiken Foundation is a living testament to the visionary leadership, 
                generosity, and dedication to community that both Donald and Carole Chaiken embodied throughout 
                their lives. Their philanthropic journey, marked by a deep commitment to Jewish values and 
                community empowerment, continues to inspire change and transform lives to this day. Their story 
                is not just one of success in business or philanthropy; it is one of love, partnership, and 
                shared purpose. Together, they helped build a stronger, more connected community, leaving behind 
                a legacy that continues to inspire and uplift those who follow in their footsteps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donald Chaiken */}
            <div id="donald-chaiken" className="relative">
              {/* Timeline connector */}
              <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden lg:block"></div>
              
              <Card className="relative card-gradient elegant-shadow hover:hover-shadow transition-all duration-500">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-display text-3xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Donald Chaiken
                  </CardTitle>
                  <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                    1936 - 2022
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-medium text-primary mb-2">Visionary Builder & Philanthropist</p>
                    <p className="text-sm text-muted-foreground">
                      A mensch in every sense of the word, known for humility, generosity, and strategic thinking
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Donald Chaiken's legacy is built on his unwavering commitment to both his profession and 
                      his community. A successful real estate developer, Donald was a man of profound integrity 
                      and generosity. He built one of Northern California's largest privately owned real estate 
                      development companies, Davidon Homes, which created thousands of homes and impacted countless 
                      lives across the region. But it was his dedication to philanthropy that truly set him apart.
                    </p>
                    
                    <div className="bg-accent-subtle/30 p-4 rounded-lg">
                      <p className="italic font-medium text-accent-foreground">
                        "You didn't ask for enough."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Donald's candid yet encouraging response to nonprofit leaders
                      </p>
                    </div>
                    
                    <p>
                      Donald's philanthropic philosophy was as direct as it was impactful. He often met with 
                      nonprofit leaders to discuss grant requests, and while his response was sometimes a 
                      straightforward "no," he would always follow with a smile and a reminder: "You didn't ask 
                      for enough." His sharp intellect and candid approach to philanthropy were matched only by 
                      his deep desire to make a real, lasting impact.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/5 p-3 rounded text-center">
                        <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-xs font-medium">Community Leader</p>
                      </div>
                      <div className="bg-accent/10 p-3 rounded text-center">
                        <Users className="h-5 w-5 text-accent mx-auto mb-1" />
                        <p className="text-xs font-medium">Mentor & Role Model</p>
                      </div>
                    </div>
                    
                    <p>
                      Donald's leadership extended beyond the world of real estate. He was deeply involved in 
                      Jewish communal life, supporting numerous organizations. His dedication to the community 
                      also led him to serve on boards and in leadership roles, most notably as president of the 
                      Jewish Community Foundation of the East Bay. Throughout his life, Donald remained a mentor 
                      and role model, a "mensch" in every sense of the word, known for his humility, generosity, 
                      and strategic thinking.
                    </p>
                    
                    <p>
                      Donald's influence extended far beyond his business dealings. He founded the Donald Chaiken 
                      Building Industry Technology Academy, which provides students with the skills and knowledge 
                      necessary to enter the building industry. His love for his work, his community, and his 
                      family remained strong throughout his life, making him a respected leader and a beloved figure.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Carole Chaiken */}
            <div id="carole-chaiken" className="relative">
              {/* Timeline connector */}
              <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary/50 hidden lg:block"></div>
              
              <Card className="relative card-gradient elegant-shadow hover:hover-shadow transition-all duration-500">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-accent rounded-full border-4 border-background hidden lg:block"></div>
                
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-accent" />
                  </div>
                  <CardTitle className="font-display text-3xl bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                    Carole Chaiken
                  </CardTitle>
                  <div className="inline-block bg-accent/10 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    1939 - 2013
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                    <p className="font-medium text-accent-foreground mb-2">Force of Nature & Compassionate Advocate</p>
                    <p className="text-sm text-muted-foreground">
                      A woman of great strength, humor, and compassion who championed justice and equality
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Carole Chaiken was a force of nature—both a philanthropist and a woman of great strength, 
                      humor, and compassion. Born in Evanston, Illinois, and raised in Los Angeles, Carole's early 
                      life shaped the strong, determined personality that would define her later years. She earned 
                      a degree in psychology from UCLA and worked as a Juvenile Probation Officer before meeting 
                      the love of her life, Donald, in 1966. They married and built a life together, raising three 
                      daughters while being deeply engaged in their community.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-accent/10 p-2 rounded text-center">
                        <p className="font-medium">Education</p>
                        <p className="text-muted-foreground">UCLA Psychology</p>
                      </div>
                      <div className="bg-primary/10 p-2 rounded text-center">
                        <p className="font-medium">Career</p>
                        <p className="text-muted-foreground">Probation Officer</p>
                      </div>
                      <div className="bg-accent-subtle/30 p-2 rounded text-center">
                        <p className="font-medium">Met Donald</p>
                        <p className="text-muted-foreground">1966</p>
                      </div>
                    </div>
                    
                    <p>
                      Carole's impact was felt across a wide array of causes, from supporting Jewish organizations 
                      to advocating for women's rights, LGBTQ+ causes, and religious pluralism in Israel. As a 
                      passionate supporter of education and social justice, Carole was instrumental in the creation 
                      of the Donald and Carole Chaiken Foundation in 1999, which has since provided crucial funding 
                      for Jewish, educational, and community organizations. Her passions extended to art and 
                      thoroughbred horse racing, areas where she cultivated lifelong interests and formed lasting 
                      connections with a broad network of friends and supporters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legacy;
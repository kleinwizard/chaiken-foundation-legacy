import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Legacy = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-6">The Legacy of Donald and Carole Chaiken</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A living testament to visionary leadership, generosity, and dedication to community
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-center">
              The Donald and Carole Chaiken Foundation is a living testament to the visionary leadership, 
              generosity, and dedication to community that both Donald and Carole Chaiken embodied throughout 
              their lives. Their philanthropic journey, marked by a deep commitment to Jewish values and 
              community empowerment, continues to inspire change and transform lives to this day. Their story 
              is not just one of success in business or philanthropy; it is one of love, partnership, and 
              shared purpose. Together, they helped build a stronger, more connected community, leaving behind 
              a legacy that continues to inspire and uplift those who follow in their footsteps.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Donald Chaiken */}
            <Card id="donald-chaiken" className="card-gradient card-shadow">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-center">
                  Donald Chaiken (1936 - 2022)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Donald Chaiken's legacy is built on his unwavering commitment to both his profession and 
                  his community. A successful real estate developer, Donald was a man of profound integrity 
                  and generosity. He built one of Northern California's largest privately owned real estate 
                  development companies, Davidon Homes, which created thousands of homes and impacted countless 
                  lives across the region. But it was his dedication to philanthropy that truly set him apart.
                </p>
                <p>
                  Donald's philanthropic philosophy was as direct as it was impactful. He often met with 
                  nonprofit leaders to discuss grant requests, and while his response was sometimes a 
                  straightforward "no," he would always follow with a smile and a reminder: "You didn't ask 
                  for enough." His sharp intellect and candid approach to philanthropy were matched only by 
                  his deep desire to make a real, lasting impact.
                </p>
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
              </CardContent>
            </Card>

            {/* Carole Chaiken */}
            <Card id="carole-chaiken" className="card-gradient card-shadow">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-center">
                  Carole Chaiken (1939 - 2013)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Carole Chaiken was a force of nature—both a philanthropist and a woman of great strength, 
                  humor, and compassion. Born in Evanston, Illinois, and raised in Los Angeles, Carole's early 
                  life shaped the strong, determined personality that would define her later years. She earned 
                  a degree in psychology from UCLA and worked as a Juvenile Probation Officer before meeting 
                  the love of her life, Donald, in 1966. They married and built a life together, raising three 
                  daughters while being deeply engaged in their community.
                </p>
                <p>
                  Carole's impact was felt across a wide array of causes, from supporting Jewish organizations 
                  to advocating for women's rights, LGBTQ+ causes, and religious pluralism in Israel. As a 
                  passionate supporter of education and social justice, Carole was instrumental in the creation 
                  of the Donald and Carole Chaiken Foundation in 1999, which has since provided crucial funding 
                  for Jewish, educational, and community organizations. Her passions extended to art and 
                  thoroughbred horse racing, areas where she cultivated lifelong interests and formed lasting 
                  connections with a broad network of friends and supporters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Legacy;
import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { Card, Media } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text
              wrap="balance"
              variant="heading-default-xl"
              style={{ color: "#33612c" }}
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          Our Categories
        </Heading>

        <Row fillWidth gap="32" s={{ direction: "column" }}>
          {home.galleryCategories.map((item) => (
            <Card
              key={item.id}
              href={`/gallery?category=${item.category}`}
              fillWidth
              direction="column"
              radius="l"
              overflow="hidden"
              style={{ flex: "1 1 calc(50% - 16px)" }} // ✅ 2-column layout
            >
              <Media
                src={item.image}
                alt={item.title}
                aspectRatio="1/1"
                sizes="(min-width: 768px) 50vw, 100vw" // ✅ image fills half screen on desktop
              />

              <Column padding="20" gap="12">
                <Heading variant="heading-strong-m">
                  {item.title}
                </Heading>
                <Text onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Row>
      </Column>

      {/* About Us Section */}
      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          About Us
        </Heading>

        <Column maxWidth="l" gap="20">
          <Heading as="h3" variant="heading-strong-m">
            Company Profile
          </Heading>
          <Text onBackground="neutral-weak">
            We are engaged in offering paper packaging products. Our range is biodegradable and is manufactured with great care by skilled workers in our factory. We have received excellent feedback for our eco product range that is convenient, qualitative, disposable, and great value for money.
            <br /><br />
            Our organization is considered one of the leading manufacturers, exporters, and suppliers of wedding and corporate gift boxes. Our range is fabricated from hygienic, food-grade raw materials that make the end product sustainable and well-crafted.
          </Text>

          <Heading as="h3" variant="heading-strong-m">
            Why Choose Us?
          </Heading>

          <Column gap="12">
            <Row gap="12" wrap>
              <Badge>Environmental Friendly</Badge>
              <Badge>Natural Materials</Badge>
              <Badge>High Quality Paper</Badge>
              <Badge>Recyclable Material</Badge>
            </Row>

            <Text onBackground="neutral-weak">
              Premium Eco Packaging has earned a leading position in the market for offering high-quality wedding invites and boxes.
              <br /><br />
              We believe our competitive advantage lies in fast lead times, excellent customer service, and quality products. Please do not hesitate to contact us if you require a product not listed on our site or have any questions.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Team Section */}
      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          Our Team
        </Heading>

        <Row fillWidth gap="32" s={{ direction: "column" }}>

          <Card
            href="https://wa.me/+919821689957"
            fillWidth
            direction="column"
            radius="l"
            overflow="hidden"
            style={{ flex: "1 1 calc(50% - 16px)" }}
          >
            <Media
              src="/images/home/Sonu Rathod.jpg" // replace with actual image
              alt="Founder & Production Manager"
              aspectRatio="3/4"
            />
            <Column padding="20" gap="8">
              <Heading variant="heading-strong-m">
                Sales Head
              </Heading>
              <Text onBackground="neutral-weak">
                We serve more than 100 brands worldwide and constantly reducing their current packaging costs, it's making easier to choose us. All you Just click for your products delevery, 100% hassle-free
              </Text>
            </Column>
          </Card>

          {/* Founder */}
          <Card
            href="https://wa.me/+917503238757"
            fillWidth
            direction="column"
            radius="l"
            overflow="hidden"
            style={{ flex: "1 1 calc(50% - 16px)" }}
          >
            <Media
              src="/images/home/Deepika Rathod.jpg" // replace with actual image
              alt="Founder & Production Manager"
              aspectRatio="3/4"
            />
            <Column padding="20" gap="8">
              <Heading variant="heading-strong-m">
                Founder & Production Manager
              </Heading>
              <Text onBackground="neutral-weak">
                We have a high quality work parameters, Hygiene Inspection, product finishing inspection, pre-shipping inspection, we ensure that our customers receive the quality product
              </Text>
            </Column>
          </Card>

          {/* Designer */}
          <Card
            href="https://wa.me/+919654133663"
            fillWidth
            direction="column"
            radius="l"
            overflow="hidden"
            style={{ flex: "1 1 calc(50% - 16px)", cursor: "pointer" }}
          >
            <Media
              src="/images/home/Vanessa.jpg" // replace with actual image
              alt="Senior Designer"
              aspectRatio="3/4"
            />
            <Column padding="20" gap="8">
              <Heading variant="heading-strong-m">
                Senior Designer
              </Heading>
              <Text onBackground="neutral-weak">
                Create overall design solutions, from the choice of color, material, and printing with my professional skills to create the strongest brand
              </Text>
            </Column>
          </Card>



        </Row>
      </Column>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>

          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>

            {/* Heading */}
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                What Our Clients Say
              </Heading>
            </Row>

            {/* Reviews */}
            <Row flex={3} paddingX="20" gap="24" s={{ direction: "column" }}>

              {/* Review 1 */}
              <Column
                style={{
                  flex: "1 1 calc(50% - 16px)",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  padding: "20px",
                }}
                gap="12"
              >
                {/* Icon */}
                <div style={{ fontSize: "40px", color: "#000" }}>👤</div>

                <Heading variant="heading-strong-m">Avinash</Heading>

                <Text onBackground="neutral-weak">
                  We used PEP service for our wedding invitations, and they were absolutely perfect. Many friends and family contacted us to say they were the best wedding invitation cards they had ever received. Premium Eco Packaging cards was incredibly awesome 🙌 throughout the entire process and delivered quickly. We give them a 10 out of 10 rating and highly recommend them.
                </Text>
              </Column>

              {/* Review 2 */}
              <Column
                style={{
                  flex: "1 1 calc(50% - 16px)",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  padding: "20px",
                }}
                gap="12"
              >
                {/* Icon */}
                <div style={{ fontSize: "40px", color: "#000" }}>👤</div>

                <Heading variant="heading-strong-m">Mr. Kush</Heading>

                <Text onBackground="neutral-weak">
                  It was a pleasure working with Premium Eco Packagings - Deepika Ma'am and her design team. They were so polite, communicative, and adept at checking formatting.
                  They created my cosmetic packaging boxes. Their embossing and foiling work was excellent.
                  Wow! Luxurious designed 🗃️ Boxes created it was absolutely premium work 👍
                  I highly recommend them!
                </Text>
              </Column>

            </Row>
          </Row>

          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}



      <Projects range={[1]} />


      {/* <Mailchimp /> */}
    </Column>
  );
}

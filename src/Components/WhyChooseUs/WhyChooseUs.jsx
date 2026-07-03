import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconArrowRight,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconCertificate,
  IconDeviceLaptop,
  IconUsers,
  IconShieldCheck,
} from "@tabler/icons-react";

const features = [
  {
    id: 1,
    icon: IconBriefcase,
    title: "10,000+ Verified Jobs",
    description:
      "Browse thousands of verified job openings from trusted companies across India.",
  },
  {
    id: 2,
    icon: IconBuildingSkyscraper,
    title: "Top Recruiters",
    description:
      "Connect with India's leading companies hiring for multiple domains and technologies.",
  },
  {
    id: 3,
    icon: IconUsers,
    title: "50K+ Active Candidates",
    description:
      "Join a growing community of professionals finding better career opportunities every day.",
  },
  {
    id: 4,
    icon: IconShieldCheck,
    title: "Safe & Secure",
    description:
      "Your profile and personal information are protected with secure authentication.",
  },
  {
    id: 5,
    icon: IconCertificate,
    title: "Verified Companies",
    description:
      "Every employer goes through a verification process before posting jobs.",
  },
  {
    id: 6,
    icon: IconDeviceLaptop,
    title: "Remote & Hybrid Jobs",
    description:
      "Find Work From Home, Hybrid, and Office opportunities all in one place.",
  },
];

const WhyChooseUs = () => {
  return (
    <Box py={90} bg="#FFFFFF">
      <Container size="xl">
        {/* Heading */}

        <Stack align="center" mb={60}>
          <Badge
            size="lg"
            radius="xl"
            color="indigo"
            variant="light"
          >
            Why Choose Us
          </Badge>

          <Title order={2} ta="center">
            Everything You Need To Build
            <Text span c="indigo" inherit>
              {" "}
              Your Dream Career
            </Text>
          </Title>

          <Text
            ta="center"
            c="dimmed"
            maw={700}
          >
            Our platform helps job seekers discover the right opportunities
            while making recruitment simple, fast, and reliable.
          </Text>
        </Stack>

        {/* Features */}

        <Grid>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Grid.Col
                key={feature.id}
                span={{ base: 12, sm: 6, lg: 4 }}
              >
                <Card
                  shadow="md"
                  radius="lg"
                  p="xl"
                  withBorder
                  h="100%"
                  style={{
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  <Stack align="flex-start">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      color="indigo"
                      variant="light"
                    >
                      <Icon size={30} />
                    </ThemeIcon>

                    <Title order={4}>
                      {feature.title}
                    </Title>

                    <Text c="dimmed">
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>

        {/* Bottom Section */}

        <Flex
          justify="space-between"
          align="center"
          mt={70}
          p="xl"
          bg="#EEF2FF"
          style={{
            borderRadius: "20px",
          }}
          direction={{ base: "column", md: "row" }}
          gap="lg"
        >
          <Stack gap={5}>
            <Title order={3}>
              Ready To Find Your Dream Job?
            </Title>

            <Text c="dimmed">
              Create your profile today and apply to thousands of verified jobs.
            </Text>
          </Stack>

          <Group>
            <Button
              radius="xl"
              size="md"
              rightSection={<IconArrowRight size={18} />}
            >
              Explore Jobs
            </Button>

            <Button
              radius="xl"
              size="md"
              variant="default"
            >
              Upload Resume
            </Button>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
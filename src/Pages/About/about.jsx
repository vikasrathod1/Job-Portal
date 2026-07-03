import {
  Box,
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Group,
  Paper,
  ThemeIcon,
  Button,
} from "@mantine/core";
import {
  IconUsers,
  IconTarget,
  IconHeart,
  IconRocket,
  IconBriefcase,
} from "@tabler/icons-react";

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        py={100}
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "white",
        }}
      >
        <Container size="xl">
          <Stack align="center" ta="center" gap="xl">
            <Title order={1} size={52} fw={700}>
              About Us
            </Title>
            <Text size="xl" maw={700} opacity={0.9}>
              Connecting talented professionals with the best opportunities in India
            </Text>
            <Text size="lg" maw={600} opacity={0.8}>
              We are building the future of recruitment — making job search simple, transparent, and effective.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container size="xl" py={80}>
        <Stack gap={80}>
          {/* Our Story */}
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title order={2}>Our Story</Title>
                <Text size="lg" c="dimmed">
                  Founded in 2025, we started with a simple mission — to bridge the gap between talented 
                  candidates and great companies in India.
                </Text>
                <Text size="lg" c="dimmed">
                  Today, we have helped thousands of professionals find their dream jobs and assisted 
                  hundreds of companies in building amazing teams.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Paper shadow="md" radius="lg" p="xl" h="100%">
                <Stack gap="md">
                  <Group>
                    <ThemeIcon size={50} radius="md" color="indigo">
                      <IconRocket size={28} />
                    </ThemeIcon>
                    <div>
                      <Title order={4}>Our Mission</Title>
                      <Text c="dimmed">Making quality employment accessible to everyone</Text>
                    </div>
                  </Group>

                  <Group>
                    <ThemeIcon size={50} radius="md" color="teal">
                      <IconTarget size={28} />
                    </ThemeIcon>
                    <div>
                      <Title order={4}>Our Vision</Title>
                      <Text c="dimmed">To become India's most trusted job platform</Text>
                    </div>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>

          {/* Values Section */}
          <div>
            <Title order={2} ta="center" mb={50}>
              Our Values
            </Title>

            <Grid gutter={30}>
              {[
                {
                  icon: <IconUsers size={32} />,
                  title: "People First",
                  desc: "We put candidates and companies at the heart of everything we do.",
                },
                {
                  icon: <IconHeart size={32} />,
                  title: "Transparency",
                  desc: "Clear communication and honest opportunities, always.",
                },
                {
                  icon: <IconBriefcase size={32} />,
                  title: "Quality",
                  desc: "Only verified companies and genuine opportunities.",
                },
                {
                  icon: <IconRocket size={32} />,
                  title: "Innovation",
                  desc: "Constantly improving to give you the best experience.",
                },
              ].map((value, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Paper shadow="sm" radius="lg" p="xl" h="100%">
                    <Stack align="center" ta="center" gap="md">
                      <ThemeIcon size={70} radius="md" variant="light" color="indigo">
                        {value.icon}
                      </ThemeIcon>
                      <Title order={4}>{value.title}</Title>
                      <Text c="dimmed">{value.desc}</Text>
                    </Stack>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </div>

          {/* Stats Section */}
          <Paper shadow="md" radius="xl" p={50} bg="#F8FAFC">
            <Grid>
              {[
                { number: "5000+", label: "Jobs Posted" },
                { number: "850+", label: "Companies" },
                { number: "15k+", label: "Happy Users" },
                { number: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <Grid.Col key={index} span={{ base: 6, md: 3 }}>
                  <Stack align="center" ta="center">
                    <Title order={1} c="indigo">
                      {stat.number}
                    </Title>
                    <Text fw={500} size="lg">
                      {stat.label}
                    </Text>
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Paper>

          {/* CTA Section */}
          <Paper
            radius="xl"
            p={60}
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "white",
              textAlign: "center",
            }}
          >
            <Stack align="center" gap="xl">
              <Title order={2}>Ready to Join the Journey?</Title>
              <Text size="xl" maw={500} opacity={0.9}>
                Whether you're looking for a job or hiring talent — we're here to help.
              </Text>
              <Group>
                <Button size="lg" radius="xl" variant="white" color="dark">
                  Browse Jobs
                </Button>
                <Button size="lg" radius="xl" variant="outline" color="white">
                  Post a Job
                </Button>
              </Group>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
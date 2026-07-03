import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconMail,
  IconSend,
  IconBellRinging,
} from "@tabler/icons-react";

const Newsletter = () => {
  return (
    <Box py={90} bg="#F8FAFC">
      <Container size="xl">
        <Grid
          align="center"
          gutter={60}
        >
          {/* Left Side */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              radius="xl"
            />
          </Grid.Col>

          {/* Right Side */}

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              p={45}
              bg="white"
              style={{
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Stack>

                <ThemeIcon
                  size={70}
                  radius="xl"
                  color="indigo"
                  variant="light"
                >
                  <IconBellRinging size={34} />
                </ThemeIcon>

                <Title order={2}>
                  Never Miss Your Dream Job
                </Title>

                <Text c="dimmed" size="lg">
                  Subscribe to our newsletter and receive the latest
                  job openings, career tips, interview preparation
                  guides, and hiring updates directly in your inbox.
                </Text>

                <TextInput
                  size="lg"
                  radius="xl"
                  placeholder="Enter your email address"
                  leftSection={<IconMail size={18} />}
                />

                <Button
                  size="lg"
                  radius="xl"
                  rightSection={<IconSend size={18} />}
                  style={{
                    background:
                      "linear-gradient(135deg,#4F46E5,#7C3AED)",
                  }}
                >
                  Subscribe Now
                </Button>

                <Flex gap={10} mt="md">
                  <Text fw={700}>✔ Weekly Job Alerts</Text>
                </Flex>

                <Flex gap={10}>
                  <Text fw={700}>✔ Interview Tips</Text>
                </Flex>

                <Flex gap={10}>
                  <Text fw={700}>✔ Career Guidance</Text>
                </Flex>

                <Flex gap={10}>
                  <Text fw={700}>✔ 100% Free Subscription</Text>
                </Flex>

              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
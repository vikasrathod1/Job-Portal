import {
  Box,
  Container,
  Grid,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Stack,
  Group,
  ThemeIcon,
} from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconSend,
} from "@tabler/icons-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. (Demo)");
    // Backend integration yahan kar sakte ho
  };

  return (
    <Box bg="#F8FAFC">
      {/* Hero */}
      <Box
        py={90}
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "white",
        }}
      >
        <Container size="xl">
          <Stack align="center" ta="center">
            <Title order={1} size={48}>
              Get In Touch
            </Title>
            <Text size="xl" maw={600} opacity={0.9}>
              Have questions? We're here to help you find the right opportunity.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container size="xl" py={80}>
        <Grid gutter={50}>
          {/* Contact Form */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper shadow="md" radius="lg" p={50}>
              <Title order={2} mb="xl">
                Send us a Message
              </Title>

              <form onSubmit={handleSubmit}>
                <Stack gap="lg">
                  <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Full Name"
                        placeholder="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size="md"
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email Address"
                        placeholder="your@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        size="md"
                      />
                    </Grid.Col>
                  </Grid>

                  <TextInput
                    label="Subject"
                    placeholder="How can we help you?"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    size="md"
                  />

                  <Textarea
                    label="Message"
                    placeholder="Write your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    minRows={6}
                    required
                    size="md"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    radius="xl"
                    leftSection={<IconSend size={20} />}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="xl">
              <Paper shadow="md" radius="lg" p="xl">
                <Title order={3} mb="xl">
                  Contact Information
                </Title>

                <Stack gap="xl">
                  <Group align="flex-start">
                    <ThemeIcon size={50} radius="md" color="indigo">
                      <IconMail size={26} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Email Us</Text>
                      <Text c="dimmed">support@jobportal.in</Text>
                      <Text c="dimmed">careers@jobportal.in</Text>
                    </div>
                  </Group>

                  <Group align="flex-start">
                    <ThemeIcon size={50} radius="md" color="teal">
                      <IconPhone size={26} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Call Us</Text>
                      <Text c="dimmed">+91 98765 43210</Text>
                      <Text c="dimmed">Mon - Fri, 9am - 6pm</Text>
                    </div>
                  </Group>

                  <Group align="flex-start">
                    <ThemeIcon size={50} radius="md" color="orange">
                      <IconMapPin size={26} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Office Address</Text>
                      <Text c="dimmed">
                        WeWork, Manyata Tech Park<br />
                        Nagawara, Bangalore - 560045
                      </Text>
                    </div>
                  </Group>

                  <Group align="flex-start">
                    <ThemeIcon size={50} radius="md" color="violet">
                      <IconClock size={26} />
                    </ThemeIcon>
                    <div>
                      <Text fw={600}>Business Hours</Text>
                      <Text c="dimmed">Monday to Friday: 9:00 AM - 6:00 PM</Text>
                      <Text c="dimmed">Saturday: 10:00 AM - 2:00 PM</Text>
                    </div>
                  </Group>
                </Stack>
              </Paper>

              {/* Quick Help Cards */}
              <Paper shadow="sm" radius="lg" p="xl" withBorder>
                <Text fw={600} mb="md">Need Quick Help?</Text>
                <Stack>
                  <Button variant="light" fullWidth justify="left">
                    Frequently Asked Questions
                  </Button>
                  <Button variant="light" fullWidth justify="left">
                    Browse Jobs
                  </Button>
                  <Button variant="light" fullWidth justify="left">
                    Post a Job (For Companies)
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
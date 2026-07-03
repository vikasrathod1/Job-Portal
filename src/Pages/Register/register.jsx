import {
  Box,
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Group,
  Divider,
  Stack,
  Anchor,
  Select,
  Flex,
} from "@mantine/core";
import { IconBrandGoogle, IconBrandGithub, IconBrandGooglePlay } from "@tabler/icons-react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "agreeTerms" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register Data:", formData);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="sm" py="xl">
        <Paper shadow="xl" radius="xl" p={50} withBorder>
          <Stack align="center" gap="md" mb={40}>
            <Title order={1} ta="center">
              Create Account
            </Title>
            <Text c="dimmed" ta="center" size="lg">
              Join thousands of professionals finding their dream jobs
            </Text>
          </Stack>

          {/* Simplified Download App Section */}
          <Paper
            shadow="sm"
            radius="lg"
            p={20}
            mb={40}
            withBorder
            style={{ background: "#f8fafc" }}
          >
            <Flex align="center" justify="space-between" direction={{ base: "column", sm: "row" }} gap={20}>
              <Text size="md" c="dimmed" style={{ flex: 1 }}>
                For Better Experience Download our mobile app for instant job alerts and easy apply
              </Text>

              <Button
                size="md"
                radius="xl"
                leftSection={<IconBrandGooglePlay size={20} />}
                style={{
                  background: "#000",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                Download App
              </Button>
            </Flex>
          </Paper>

          <form onSubmit={handleSubmit}>
            <Stack gap="lg">
              <TextInput
                label="Full Name"
                placeholder="John Doe"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                size="lg"
                required
              />

              <TextInput
                label="Email Address"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                required
              />

              <Select
                label="I am a"
                name="role"
                value={formData.role}
                onChange={(value) => setFormData({ ...formData, role: value })}
                data={[
                  { value: "jobseeker", label: "Job Seeker" },
                  { value: "employer", label: "Employer / Company" },
                ]}
                size="lg"
              />

              <PasswordInput
                label="Password"
                placeholder="Create a strong password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                required
              />

              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                size="lg"
                required
              />

              <Checkbox
                label="I agree to the Terms & Conditions and Privacy Policy"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="lg" radius="xl" fullWidth>
                Create Account
              </Button>
            </Stack>
          </form>

          <Divider my="xl" label="OR" labelPosition="center" />

          <Stack gap="md">
            <Button
              variant="default"
              size="lg"
              radius="xl"
              fullWidth
              leftSection={<IconBrandGoogle size={20} />}
            >
              Sign up with Google
            </Button>

            <Button
              variant="default"
              size="lg"
              radius="xl"
              fullWidth
              leftSection={<IconBrandGithub size={20} />}
            >
              Sign up with GitHub
            </Button>
          </Stack>

          <Text ta="center" mt="xl" size="md">
            Already have an account?{" "}
            <Anchor href="/login" fw={600} c="indigo">
              Sign In
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
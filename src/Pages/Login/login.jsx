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
  Flex,
} from "@mantine/core";
import { IconBrandGoogle, IconBrandGithub, IconBrandGooglePlay } from "@tabler/icons-react";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <Container size="sm">
        <Paper shadow="xl" radius="xl" p={50} withBorder>
          <Stack align="center" gap="md" mb={40}>
            <Title order={1} ta="center">
              Welcome Back
            </Title>
            <Text c="dimmed" ta="center" size="lg">
              Sign in to continue your job search
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
                label="Email Address"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="lg"
                required
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                required
              />

              <Group justify="space-between" align="center">
                <Checkbox
                  label="Remember me"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <Anchor href="#" size="sm" c="indigo">
                  Forgot Password?
                </Anchor>
              </Group>

              <Button type="submit" size="lg" radius="xl" fullWidth>
                Sign In
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
              Continue with Google
            </Button>

            <Button
              variant="default"
              size="lg"
              radius="xl"
              fullWidth
              leftSection={<IconBrandGithub size={20} />}
            >
              Continue with GitHub
            </Button>
          </Stack>

          <Text ta="center" mt="xl" size="md">
            Don't have an account?{" "}
            <Anchor href="/register" fw={600} c="indigo">
              Sign Up
            </Anchor>
          </Text>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
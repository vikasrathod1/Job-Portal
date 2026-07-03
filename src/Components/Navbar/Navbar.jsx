import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconSearch,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "../../assets/images/logo1.png";   // path apne hisaab se adjust karo

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Find Jobs", path: "/jobs" },
    { label: "Companies", path: "/companies" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= Navbar ================= */}

      <Box
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(18px)",
          background: "rgba(255,255,255,0.90)",
          borderBottom: "1px solid #E9ECEF",
        }}
      >
        <Container size="xl">

          <Flex
            h={85}
            justify="space-between"
            align="center"
          >

            {/* Logo - Your Provided Logo */}

            {/* <Image
              src="/logo.png"        // ← Yeh line change karna hai
              alt="Idea Placement Services"
              h={55}
              fit="contain"
              style={{ cursor: "pointer" }}
            /> */}
            <Image src={logoSrc} w={80} />

            {/* Desktop Menu */}

            <Group gap={35} visibleFrom="md">

              {navLinks.map((item) => (
                <Text
                  key={item.path}
                  component={Link}
                  to={item.path}
                  fw={600}
                  fz="16"
                  c={
                    location.pathname === item.path
                      ? "indigo"
                      : "dark"
                  }
                  style={{
                    transition: ".3s",
                  }}
                >
                  {item.label}
                </Text>
              ))}

            </Group>

            {/* Right Side */}

            <Group visibleFrom="md">

              <ActionIcon
                variant="light"
                radius="xl"
                size={42}
              >
                <IconSearch size={20} />
              </ActionIcon>

              <ActionIcon
                variant="light"
                radius="xl"
                size={42}
              >
                <IconBell size={20} />
              </ActionIcon>

              <Button
                variant="subtle"
                component={Link}
                to="/login"
                radius="xl"
              >
                Login
              </Button>

              <Button
                component={Link}
                to="/register"
                radius="xl"
                size="md"
                style={{
                  background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
                }}
              >
                Register
              </Button>

            </Group>

            {/* Mobile Burger */}

            <Burger
              hiddenFrom="md"
              opened={opened}
              onClick={open}
            />

          </Flex>

        </Container>
      </Box>

      {/* ================= Drawer ================= */}

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title="Idea Placement Services"
        size="75%"
      >

        <Group
          gap="xl"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >

          {navLinks.map((item) => (
            <Text
              key={item.path}
              component={Link}
              to={item.path}
              fw={600}
              fz={18}
              c="dark"
              onClick={close}
            >
              {item.label}
            </Text>
          ))}

          <Button
            fullWidth
            radius="xl"
            variant="light"
            component={Link}
            to="/login"
            onClick={close}
          >
            Login
          </Button>

          <Button
            fullWidth
            radius="xl"
            component={Link}
            to="/register"
            onClick={close}
            style={{
              background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
            }}
          >
            Register
          </Button>

        </Group>

      </Drawer>
    </>
  );
};

export default Navbar;
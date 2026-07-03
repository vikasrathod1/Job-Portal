import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    <Box
      py={80}
      style={{
        background:
          "linear-gradient(135deg,#EEF2FF 0%,#F8FAFC 45%,#FFFFFF 100%)",
      }}
    >
      <Container size="xl">
        <Flex
          justify="space-between"
          align="center"
          gap={60}
          direction={{ base: "column", md: "row" }}
        >
          {/* Left Content */}

          <Stack gap="lg" flex={1}>
            <Badge
              radius="xl"
              color="indigo"
              variant="light"
              w="fit-content"
              px={18}
              py={12}
            >
              🚀 India's #1 Smart Job Portal
            </Badge>

            <Title
              order={1}
              fz={{ base: 40, md: 60 }}
              fw={800}
              lh={1.2}
            >
              Find Your
              {/* <Text span c="indigo" style={{fontSize:"50px", fontWeight:800}}>
                {" "}
                Dream Job{" "}
              </Text> */}
              <span style={{color:"indigo"}} > Dream Job</span> Today.
            </Title>

            <Text
              c="dimmed"
              fz="lg"
              maw={550}
            >
              Explore thousands of verified opportunities from top
              companies across India. Build your career with confidence.
            </Text>

            <Group mt={15}>
              <Button
                radius="xl"
                size="lg"
                rightSection={<IconArrowRight size={18} />}
                style={{
                  background:
                    "linear-gradient(135deg,#4F46E5,#7C3AED)",
                }}
              >
                Explore Jobs
              </Button>

              <Button
                radius="xl"
                size="lg"
                variant="default"
              >
                Upload Resume
              </Button>
            </Group>

            <Group mt={20}>
              {[
                "React",
                "Remote",
                "Java",
                "UI/UX",
                "Marketing",
              ].map((skill) => (
                <Badge
                  key={skill}
                  radius="xl"
                  variant="outline"
                  color="gray"
                  size="lg"
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </Stack>

          {/* Right Image */}

          <Box flex={1}>
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
              radius="xl"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
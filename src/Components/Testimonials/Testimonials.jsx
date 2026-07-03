import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "Google",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This job portal made my job search incredibly easy. Within two weeks, I received multiple interview calls and finally landed my dream role at Google.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Software Engineer",
    company: "Microsoft",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The interface is clean, fast, and very user-friendly. The verified job listings gave me confidence while applying.",
  },
  {
    id: 3,
    name: "Sneha Patil",
    role: "UI / UX Designer",
    company: "Adobe",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I loved the personalized recommendations and remote job opportunities. Highly recommended for designers.",
  },
  {
    id: 4,
    name: "Aman Singh",
    role: "Backend Developer",
    company: "Amazon",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    review:
      "The application process was smooth, and the platform connected me with top recruiters across India.",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Full Stack Developer",
    company: "TCS",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review:
      "One of the best job portals I've used. The resume upload feature and job alerts saved me a lot of time.",
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "Java Developer",
    company: "Infosys",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Excellent platform with verified companies. I found a great opportunity that perfectly matched my skills.",
  },
];

const Testimonials = () => {
  return (
    <Box py={90} bg="#F8FAFC">
      <Container size="xl">

        {/* Heading */}

        <Stack align="center" mb={60}>
          <Badge
            color="indigo"
            radius="xl"
            size="lg"
            variant="light"
          >
            Testimonials
          </Badge>

          <Title order={2} ta="center">
            What Our Users Say
          </Title>

          <Text
            c="dimmed"
            ta="center"
            maw={700}
          >
            Thousands of professionals have trusted our platform to
            find their dream jobs. Here's what they have to say.
          </Text>
        </Stack>

        {/* Cards */}

        <Grid>
          {testimonials.map((user) => (
            <Grid.Col
              key={user.id}
              span={{ base: 12, md: 6, lg: 4 }}
            >
              <Card
                shadow="lg"
                radius="lg"
                p="xl"
                withBorder
                h="100%"
                style={{
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <Stack>

                  <Rating
                    value={user.rating}
                    readOnly
                  />

                  <Text
                    c="dimmed"
                    style={{
                      lineHeight: 1.8,
                    }}
                  >
                    "{user.review}"
                  </Text>

                  <Group mt="md">
                    <Avatar
                      src={user.image}
                      size={60}
                      radius="xl"
                    />

                    <div>
                      <Text fw={700}>
                        {user.name}
                      </Text>

                      <Text
                        size="sm"
                        c="dimmed"
                      >
                        {user.role}
                      </Text>

                      <Badge
                        mt={5}
                        color="indigo"
                        variant="light"
                      >
                        {user.company}
                      </Badge>
                    </div>
                  </Group>

                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Testimonials;
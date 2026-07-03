import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Group,
  TextInput,
  Select,
  Title,
  Text,
  Stack,
  Button,
  Paper,
} from "@mantine/core";
import { IconSearch, IconMapPin, IconUsers } from "@tabler/icons-react";

import CompanyCard from "../../Components/Companies/CompaniesCard";

const sampleCompanies = [
  {
    id: 1,
    name: "Groww",
    industry: "Fintech",
    location: "Bangalore",
    employees: "1200+",
    openRoles: 48,
    logoColor: "#00A86B",
    description: "India's fastest growing investment platform",
  },
  {
    id: 2,
    name: "Zerodha",
    industry: "Fintech",
    location: "Bangalore",
    employees: "800+",
    openRoles: 24,
    logoColor: "#387ED1",
    description: "World's largest retail brokerage",
  },
  {
    id: 3,
    name: "Razorpay",
    industry: "Payments",
    location: "Bangalore",
    employees: "1500+",
    openRoles: 67,
    logoColor: "#2B7FFF",
    description: "Payment solutions for businesses",
  },
  {
    id: 4,
    name: "Meesho",
    industry: "E-commerce",
    location: "Bangalore",
    employees: "4500+",
    openRoles: 89,
    logoColor: "#FF5E5E",
    description: "Reselling & Social Commerce",
  },
  {
    id: 5,
    name: "Swiggy",
    industry: "Food Tech",
    location: "Bangalore",
    employees: "8500+",
    openRoles: 124,
    logoColor: "#FC8019",
    description: "Food delivery & quick commerce leader",
  },
  {
    id: 6,
    name: "Cred",
    industry: "Fintech",
    location: "Bangalore",
    employees: "900+",
    openRoles: 35,
    logoColor: "#000000",
    description: "Rewards for credit card payments",
  },
];

const Companies = () => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("all");

  return (
    <Box bg="#F8FAFC">
      {/* Hero Section */}
      <Box
        py={80}
        style={{
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
          color: "white",
        }}
      >
        <Container size="xl">
          <Stack align="center" ta="center">
            <Title order={1} size={48} fw={700}>
              Discover Top Companies
            </Title>
            <Text size="xl" maw={600} opacity={0.9}>
              Explore 500+ best companies hiring in India right now
            </Text>

            {/* Search Bar */}
            <Paper radius="xl" p="xs" shadow="xl" w="100%" maw={700} mt={30}>
              <Group>
                <TextInput
                  placeholder="Search companies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  leftSection={<IconSearch size={20} />}
                  size="lg"
                  radius="xl"
                  style={{ flex: 1 }}
                />
                <Button size="lg" radius="xl" leftSection={<IconSearch />}>
                  Search
                </Button>
              </Group>
            </Paper>
          </Stack>
        </Container>
      </Box>

      <Container size="xl" py={50}>
        <Grid>
          {/* Left Filters */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Paper shadow="md" radius="lg" p="xl" withBorder>
              <Title order={4} mb="lg">
                Filters
              </Title>

              <Stack gap="xl">
                <div>
                  <Text fw={500} mb="sm">Industry</Text>
                  <Select
                    value={industry}
                    onChange={setIndustry}
                    data={[
                      { value: "all", label: "All Industries" },
                      { value: "fintech", label: "Fintech" },
                      { value: "ecommerce", label: "E-commerce" },
                      { value: "saas", label: "SaaS" },
                      { value: "healthtech", label: "HealthTech" },
                    ]}
                    radius="md"
                  />
                </div>

                <div>
                  <Text fw={500} mb="sm">Location</Text>
                  <Select
                    placeholder="Select City"
                    data={["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Remote"]}
                    radius="md"
                  />
                </div>

                <div>
                  <Text fw={500} mb="sm">Company Size</Text>
                  <Select
                    data={[
                      "1-50 employees",
                      "51-200 employees",
                      "201-500 employees",
                      "500+ employees",
                    ]}
                    radius="md"
                  />
                </div>
              </Stack>

              <Button fullWidth mt="xl" variant="outline" color="gray">
                Reset Filters
              </Button>
            </Paper>
          </Grid.Col>

          {/* Companies Grid */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            <Group justify="space-between" mb="xl">
              <Title order={3}>
                248 Companies
              </Title>
              <Select
                data={[
                  { value: "popular", label: "Most Popular" },
                  { value: "newest", label: "Newest" },
                  { value: "hiring", label: "Actively Hiring" },
                ]}
                defaultValue="popular"
                w={200}
              />
            </Group>

            <Grid>
              {sampleCompanies.map((company) => (
                <Grid.Col key={company.id} span={{ base: 12, sm: 6, lg: 4 }}>
                  <CompanyCard company={company} />
                </Grid.Col>
              ))}
            </Grid>

            <Group justify="center" mt={50}>
              <Button size="lg" radius="xl" variant="outline">
                Load More Companies
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Companies;
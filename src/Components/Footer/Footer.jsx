// import {
//   ActionIcon,
//   Box,
//   Container,
//   Divider,
//   Flex,
//   Grid,
//   Group,
//   Stack,
//   Text,
//   Title,
// } from "@mantine/core";

// import {
//   IconBrandFacebook,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandTwitter,
//   IconMapPin,
//   IconPhone,
//   IconMail,
//   IconBriefcase,
// } from "@tabler/icons-react";

// const Footer = () => {
//   return (
//     <Box bg="#111827" c="white" pt={70} pb={25}>
//       <Container size="xl">

//         <Grid gutter={50}>

//           {/* Company */}

//           <Grid.Col span={{ base: 12, md: 4 }}>

//             <Group mb="md">
//               <IconBriefcase size={35} color="#6366F1" />

//               <Title order={3} c="white">
//                 JobPortal
//               </Title>
//             </Group>

//             <Text c="gray.4" lh={1.8}>
//               India's trusted hiring platform helping job seekers
//               connect with leading companies. Explore thousands of
//               verified opportunities and build your dream career.
//             </Text>

//             <Group mt={25}>

//               <ActionIcon
//                 size="lg"
//                 radius="xl"
//                 variant="light"
//                 color="indigo"
//               >
//                 <IconBrandFacebook size={20} />
//               </ActionIcon>

//               <ActionIcon
//                 size="lg"
//                 radius="xl"
//                 variant="light"
//                 color="indigo"
//               >
//                 <IconBrandInstagram size={20} />
//               </ActionIcon>

//               <ActionIcon
//                 size="lg"
//                 radius="xl"
//                 variant="light"
//                 color="indigo"
//               >
//                 <IconBrandLinkedin size={20} />
//               </ActionIcon>

//               <ActionIcon
//                 size="lg"
//                 radius="xl"
//                 variant="light"
//                 color="indigo"
//               >
//                 <IconBrandTwitter size={20} />
//               </ActionIcon>

//             </Group>

//           </Grid.Col>

//           {/* Quick Links */}

//           <Grid.Col span={{ base: 6, md: 2 }}>

//             <Title order={4} mb="lg">
//               Quick Links
//             </Title>

//             <Stack gap={12}>
//               <Text c="gray.4">Home</Text>
//               <Text c="gray.4">Browse Jobs</Text>
//               <Text c="gray.4">Companies</Text>
//               <Text c="gray.4">About Us</Text>
//               <Text c="gray.4">Contact</Text>
//             </Stack>

//           </Grid.Col>

//           {/* Categories */}

//           <Grid.Col span={{ base: 6, md: 3 }}>

//             <Title order={4} mb="lg">
//               Popular Categories
//             </Title>

//             <Stack gap={12}>
//               <Text c="gray.4">Software Development</Text>
//               <Text c="gray.4">UI / UX Design</Text>
//               <Text c="gray.4">Marketing</Text>
//               <Text c="gray.4">Finance</Text>
//               <Text c="gray.4">Human Resources</Text>
//             </Stack>

//           </Grid.Col>

//           {/* Contact */}

//           <Grid.Col span={{ base: 12, md: 3 }}>

//             <Title order={4} mb="lg">
//               Contact Us
//             </Title>

//             <Stack gap={18}>

//               <Group align="flex-start">
//                 <IconMapPin color="#6366F1" size={20} />
//                 <Text c="gray.4">
//                   Pune, Maharashtra,
//                   <br />
//                   India
//                 </Text>
//               </Group>

//               <Group>
//                 <IconPhone color="#6366F1" size={20} />
//                 <Text c="gray.4">
//                   +91 98765 43210
//                 </Text>
//               </Group>

//               <Group>
//                 <IconMail color="#6366F1" size={20} />
//                 <Text c="gray.4">
//                   support@jobportal.com
//                 </Text>
//               </Group>

//             </Stack>

//           </Grid.Col>

//         </Grid>

//         <Divider my={40} color="gray" />

//         <Flex
//           justify="space-between"
//           align="center"
//           direction={{ base: "column", sm: "row" }}
//           gap="md"
//         >
//           <Text c="gray.5" size="sm">
//             © 2026 JobPortal. All Rights Reserved.
//           </Text>

//           <Group gap="lg">
//             <Text c="gray.5" size="sm">
//               Privacy Policy
//             </Text>

//             <Text c="gray.5" size="sm">
//               Terms & Conditions
//             </Text>

//             <Text c="gray.5" size="sm">
//               Cookies
//             </Text>
//           </Group>
//         </Flex>

//       </Container>
//     </Box>
//   );
// };

// export default Footer;



import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

import logoSrc from "../../assets/images/logo1.png";

const Footer = () => {
  return (
    <Box bg="#111827" c="white" pt={70} pb={25}>
      <Container size="xl">
        <Grid gutter={50}>
          {/* Company */}

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group mb="md">
              <Image src={logoSrc} w={90} />
            </Group>

            <Text c="gray.4" lh={1.8}>
              India's trusted hiring platform helping job seekers connect with
              leading companies. Explore thousands of verified opportunities and
              build your dream career.
            </Text>

            {/* Social Media Icons */}

            <Group mt={25} gap="md">
              {/* Facebook */}

              <ActionIcon
                size={45}
                radius={16}
                variant="filled"
                style={{
                  background: "#1877F2",
                  boxShadow: "0 8px 20px rgba(24,119,242,.35)",
                }}
              >
                <FaFacebookF size={25} color="white" />
              </ActionIcon>

              {/* Instagram */}

              <ActionIcon
                size={45}
                radius={16}
                variant="filled"
                style={{
                  background:
                    "linear-gradient(135deg,#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040,#FCAF45,#FFDC80)",
                  boxShadow: "0 8px 20px rgba(225,48,108,.35)",
                }}
              >
                <FaInstagram size={25} color="white" />
              </ActionIcon>

              {/* WhatsApp */}

              <ActionIcon
                size={45}
                radius={16}
                variant="filled"
                style={{
                  background: "#25D366",
                  boxShadow: "0 8px 20px rgba(37,211,102,.35)",
                }}
              >
                <FaWhatsapp size={25} color="white" />
              </ActionIcon>

              {/* Twitter */}

              <ActionIcon
                size={45}
                radius={16}
                variant="filled"
                style={{
                  background: "#1DA1F2",
                  boxShadow: "0 8px 20px rgba(29,161,242,.35)",
                }}
              >
                <FaTwitter size={25} color="white" />
              </ActionIcon>

              {/* LinkedIn */}

              <ActionIcon
                size={45}
                radius={16}
                variant="filled"
                style={{
                  background: "#0A66C2",
                  boxShadow: "0 8px 20px rgba(10,102,194,.35)",
                }}
              >
                <FaLinkedinIn size={25} color="white" />
              </ActionIcon>
            </Group>
          </Grid.Col>

          {/* Quick Links */}

          <Grid.Col span={{ base: 6, md: 2 }}>
            <Title order={4} mb="lg">
              Quick Links
            </Title>

            <Stack gap={12}>
              <Text c="gray.4">Home</Text>
              <Text c="gray.4">Browse Jobs</Text>
              <Text c="gray.4">Companies</Text>
              <Text c="gray.4">About Us</Text>
              <Text c="gray.4">Contact</Text>
            </Stack>
          </Grid.Col>

          {/* Popular Categories */}

          <Grid.Col span={{ base: 6, md: 3 }}>
            <Title order={4} mb="lg">
              Popular Categories
            </Title>

            <Stack gap={12}>
              <Text c="gray.4">Software Development</Text>
              <Text c="gray.4">UI / UX Design</Text>
              <Text c="gray.4">Marketing</Text>
              <Text c="gray.4">Finance</Text>
              <Text c="gray.4">Human Resources</Text>
            </Stack>
          </Grid.Col>

          {/* Contact */}

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={4} mb="lg">
              Contact Us
            </Title>

            <Stack gap={18}>
              <Group align="flex-start">
                <IconMapPin color="#6366F1" size={20} />

                <Text c="gray.4">
                  Pune, Maharashtra
                  <br />
                  India
                </Text>
              </Group>

              <Group>
                <IconPhone color="#6366F1" size={20} />

                <Text c="gray.4">+91 98765 43210</Text>
              </Group>

              <Group>
                <IconMail color="#6366F1" size={20} />

                <Text c="gray.4">support@jobportal.com</Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={40} color="gray" />

        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap="md"
        >
          <Text c="gray.5" size="sm">
            © 2026 JobPortal. All Rights Reserved.
          </Text>

          <Group gap="lg">
            <Text c="gray.5" size="sm">
              Privacy Policy
            </Text>

            <Text c="gray.5" size="sm">
              Terms & Conditions
            </Text>

            <Text c="gray.5" size="sm">
              Cookies
            </Text>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
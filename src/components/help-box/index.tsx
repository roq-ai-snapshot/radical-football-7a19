import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Academy Owner'];
  const roles = ['Parent', 'Academy Owner', 'Coach', 'Player'];
  const applicationName = `radical-football77`;
  const tenantName = `Academy`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `1. As an Academy Owner, I want to create an account for my soccer academy so that I can manage my academy's information and users.

2. As an Academy Owner, I want to invite coaches and players to join my academy's platform so that they can access and contribute to their profiles and development plans.

3. As an Academy Owner, I want to assign coaches to specific players so that they can work together on the player's development.

4. As a Coach, I want to create and update individual player profiles with their personal information, skills, and performance metrics so that I can track their progress and development.

5. As a Coach, I want to create and update development plans for each player, including goals, milestones, and training activities, so that I can guide their growth and improvement.

6. As a Coach, I want to view and compare the profiles and development plans of all players in my academy so that I can identify trends and opportunities for improvement.

7. As a Player, I want to view and update my own profile with my personal information, skills, and performance metrics so that I can track my progress and development.

8. As a Player, I want to view and update my development plan, including goals, milestones, and training activities, so that I can work towards my growth and improvement.

9. As a Parent, I want to create an account and link it to my child's player profile so that I can view their progress and development.

10. As a Parent, I want to view and update my child's profile with their personal information, skills, and performance metrics so that I can track their progress and development.

11. As a Parent, I want to view and update my child's development plan, including goals, milestones, and training activities, so that I can support their growth and improvement.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

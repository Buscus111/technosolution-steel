'use client';

import { Stack, Title, Text, ThemeIcon } from '@mantine/core';
import { ReactNode } from 'react';

interface AdvantageCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    centered?: boolean;
}

export function AdvantageCard({
    icon,
    title,
    description,
    centered = true
}: AdvantageCardProps) {
    return (
        <Stack gap="md" ta={centered ? "center" : "left"}>
            <ThemeIcon
                size={80}
                variant="gradient"
                gradient={{ from: 'blue.6', to: 'cyan.4' }}
                mx={centered ? "auto" : undefined}
            >
                {icon}
            </ThemeIcon>
            <Title order={4} c="white" fw={600}>
                {title}
            </Title>
            <Text c="gray.4" lh={1.6}>
                {description}
            </Text>
        </Stack>
    );
}

'use client';

import { Flex, ThemeIcon, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface ContactItemProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    href?: string;
}

export function ContactItem({ icon, title, subtitle, href }: ContactItemProps) {
    const content = (
        <Flex align="center" gap="md">
            <ThemeIcon size={50} variant="gradient" gradient={{ from: 'blue.6', to: 'cyan.4' }}>
                {icon}
            </ThemeIcon>
            <div>
                <Text c="white" fw={600} size="lg">{title}</Text>
                <Text c="gray.5" size="sm">{subtitle}</Text>
            </div>
        </Flex>
    );

    if (href) {
        return (
            <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {content}
            </a>
        );
    }

    return content;
}

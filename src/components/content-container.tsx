import React, { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface ContentContainerProps {
    className?: string;
}

const ContentContainer: React.FC<PropsWithChildren<ContentContainerProps>> = ({
    children,
    className,
}) => {
    return (
        <div className="flex flex-row full justify-center w-full">
            <div className={cn('container px-6 sm:px-20 w-full', className)}>
                {children}
            </div>
        </div>
    );
};

export default ContentContainer;

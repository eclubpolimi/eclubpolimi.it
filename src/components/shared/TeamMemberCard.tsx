import { Instagram, Linkedin } from 'lucide-react';

interface TeamMemberCardProps {
    name: string;
    role: string;
    photo: string;
    instagramLink?: string;
    linkedinLink?: string;
}

export default function TeamMemberCard({
    name,
    role,
    photo,
    instagramLink,
    linkedinLink,
}: TeamMemberCardProps) {
    const hasLinks = Boolean(instagramLink || linkedinLink);
    const isCoordinator = role.toLowerCase().includes('coordinator');

    const wrapperClasses = [
        'group w-full max-w-[215px]',
        isCoordinator ? 'rounded-2xl p-[3px] bg-gradient-to-r from-[#4cc9ff50] via-[#4c7bff70] to-[#4cc9ff50]' : '',
    ]
        .join(' ')
        .trim();

    const cardClasses = [
        'w-full flex flex-col rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border',
        isCoordinator ? 'border-[#8ac7ff]/70' : 'border-white/60 dark:border-gray-800',
    ]
        .join(' ')
        .trim();

    return (
        <div className={wrapperClasses}>
            <div className={cardClasses}>
                {/* 图片区域 */}
                <div className="relative w-full aspect-square overflow-hidden rounded-[16px] bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl text-gray-500 bg-white/40">
                            👤
                        </div>
                    )}

                    {/* Hover 时出现的黑色渐变 + 中间两个 icon */}
                    {hasLinks && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* 全覆盖的渐变 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black flex items-end justify-center pb-[5px] gap-4">
                                {instagramLink && (
                                    <a
                                        href={instagramLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-transform duration-200 hover:scale-110"
                                        aria-label={`${name} Instagram profile`}
                                    >
                                        <Instagram className="w-8 h-8 text-white" />
                                    </a>
                                )}
                                {linkedinLink && (
                                    <a
                                        href={linkedinLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="transition-transform duration-200 hover:scale-110"
                                        aria-label={`${name} LinkedIn profile`}
                                    >
                                        <Linkedin className="w-8 h-8 text-white" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 名字 + 职位，保持你原来的白色底设计 */}
                <div className="px-4 pt-0 pb-4">
                    <h5 className="text-xs font-semibold text-gray-900 dark:text-white leading-tight uppercase tracking-wide">
                        {name}
                    </h5>
                    <p className="mt-1 text-sm text-[#2B5DAA] dark:text-[#8FB7FF]">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

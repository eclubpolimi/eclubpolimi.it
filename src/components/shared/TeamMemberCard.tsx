type IconProps = {
    className?: string;
};

const InstagramIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

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
        'w-full h-full flex flex-col bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden',
        isCoordinator ? 'rounded-[13px]' : 'rounded-2xl border border-white/60',
    ]
        .join(' ')
        .trim();

    return (
        <div className={wrapperClasses}>
            <div className={cardClasses}>
                {/* 图片区域 */}
                <div className="relative w-full aspect-square overflow-hidden rounded-[16px] bg-gradient-to-b from-gray-200 to-gray-300">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-brand-soft" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-12 h-12 text-brand-ink"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
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
                                        <InstagramIcon className="w-8 h-8 text-white" />
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
                                        <LinkedinIcon className="w-8 h-8 text-white" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* 名字 + 职位，保持你原来的白色底设计 */}
                <div className="px-4 pt-0 pb-4">
                    <h5 className="text-xs font-semibold text-gray-900 leading-tight uppercase tracking-wide">
                        {name}
                    </h5>
                    <p className="mt-1 text-sm text-brand-navy-flat">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

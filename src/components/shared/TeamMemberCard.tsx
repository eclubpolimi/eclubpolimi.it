interface TeamMemberCardProps {
    name: string;
    role: string;
    photo: string;
    instagramLink?: string;
    linkedinLink?: string;
    isLead?: boolean;
}

const InstagramIcon = ({ className }: { className?: string }) => (
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

const LinkedinIcon = ({ className }: { className?: string }) => (
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

export default function TeamMemberCard({
    name,
    role,
    photo,
    instagramLink,
    linkedinLink,
    isLead = false,
}: TeamMemberCardProps) {
    const hasLinks = Boolean(instagramLink || linkedinLink);

    return (
        <div className="group w-full text-center">
            <div
                className={`relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-2xl ${
                    isLead
                        ? 'p-[2px] bg-gradient-to-r from-[#4cc9ff50] via-[#4c7bff70] to-[#4cc9ff50]'
                        : 'bg-gray-100'
                }`}
            >
                <div className={`h-full w-full overflow-hidden ${isLead ? 'rounded-[14px] bg-white' : ''}`}>
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-brand-soft" aria-hidden="true">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-10 w-10 text-brand-ink"
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
                </div>

                {hasLinks && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        {instagramLink && (
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                                aria-label={`${name} Instagram profile`}
                            >
                                <InstagramIcon className="w-4 h-4" />
                            </a>
                        )}
                        {linkedinLink && (
                            <a
                                href={linkedinLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand"
                                aria-label={`${name} LinkedIn profile`}
                            >
                                <LinkedinIcon className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            <h5 className="mt-4 text-[15px] font-semibold text-gray-900 leading-snug">
                {name}
            </h5>
            <p className="mt-1 text-[13px] text-gray-500 leading-snug px-1">
                {role}
            </p>
        </div>
    );
}

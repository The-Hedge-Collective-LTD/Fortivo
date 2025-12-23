'use client';

export default function TechBackground() {
    // Custom SVG components for tech icons
    const DashboardIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
    );

    const CRMIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const StockMarketIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
    );

    const ChartsAIIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    const PaymentAggregatorIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            <path d="M12 8h5v2h-5zm0 4h5v2h-5zM7 8h2v2H7zm0 4h2v2H7z" />
        </svg>
    );

    const WebIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
    );

    const MobileIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 20c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4H7V4h10v14z" />
        </svg>
    );

    const SecurityIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
    );

    const DatabaseIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4z" />
            <path d="M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
            <path d="M4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
        </svg>
    );

    const AnalyticsIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
        </svg>
    );

    const CloudIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
    );

    const APIIcon = ({ size, className }: { size: number; className?: string }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7zM3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z" />
        </svg>
    );

    // Array of tech icons with their properties
    const techIcons = [
        // First viewport (0-100%)
        { component: DashboardIcon, size: 24, position: { top: "10%", left: "5%" }, opacity: 0.15 },
        { component: CRMIcon, size: 26, position: { top: "15%", right: "8%" }, opacity: 0.16 },
        { component: StockMarketIcon, size: 28, position: { top: "25%", left: "12%" }, opacity: 0.18 },
        { component: ChartsAIIcon, size: 22, position: { top: "35%", right: "15%" }, opacity: 0.14 },
        { component: PaymentAggregatorIcon, size: 24, position: { top: "45%", left: "8%" }, opacity: 0.16 },
        { component: WebIcon, size: 20, position: { top: "55%", right: "10%" }, opacity: 0.13 },
        { component: MobileIcon, size: 22, position: { top: "65%", left: "15%" }, opacity: 0.15 },
        { component: SecurityIcon, size: 18, position: { top: "75%", right: "12%" }, opacity: 0.12 },
        { component: DatabaseIcon, size: 24, position: { top: "85%", left: "10%" }, opacity: 0.14 },
        { component: AnalyticsIcon, size: 16, position: { top: "8%", left: "60%" }, opacity: 0.1 },
        { component: CloudIcon, size: 20, position: { top: "58%", left: "20%" }, opacity: 0.11 },
        { component: APIIcon, size: 18, position: { top: "48%", left: "5%" }, opacity: 0.12 },
        { component: CRMIcon, size: 16, position: { top: "5%", left: "25%" }, opacity: 0.14 },
        { component: StockMarketIcon, size: 20, position: { top: "38%", left: "60%" }, opacity: 0.15 },

        // Second viewport (100-200%)
        { component: PaymentAggregatorIcon, size: 30, position: { top: "120%", left: "75%" }, opacity: 0.16 },
        { component: ChartsAIIcon, size: 28, position: { top: "140%", left: "80%" }, opacity: 0.15 },
        { component: CRMIcon, size: 26, position: { top: "160%", left: "85%" }, opacity: 0.13 },
        { component: StockMarketIcon, size: 24, position: { top: "180%", left: "78%" }, opacity: 0.14 },
        { component: SecurityIcon, size: 22, position: { top: "130%", left: "45%" }, opacity: 0.12 },
        { component: PaymentAggregatorIcon, size: 20, position: { top: "170%", left: "45%" }, opacity: 0.15 },
        { component: AnalyticsIcon, size: 18, position: { top: "150%", left: "70%" }, opacity: 0.13 },
        { component: WebIcon, size: 20, position: { top: "112%", left: "35%" }, opacity: 0.11 },
        { component: ChartsAIIcon, size: 22, position: { top: "142%", left: "25%" }, opacity: 0.13 },
        { component: DashboardIcon, size: 24, position: { top: "172%", left: "35%" }, opacity: 0.12 },
        { component: DatabaseIcon, size: 18, position: { top: "182%", left: "55%" }, opacity: 0.14 },
        { component: CRMIcon, size: 14, position: { top: "128%", left: "90%" }, opacity: 0.12 },
        { component: CloudIcon, size: 18, position: { top: "188%", left: "25%" }, opacity: 0.13 },
        { component: StockMarketIcon, size: 20, position: { top: "118%", left: "80%" }, opacity: 0.14 },
        { component: APIIcon, size: 24, position: { top: "178%", left: "65%" }, opacity: 0.13 },
        { component: PaymentAggregatorIcon, size: 18, position: { top: "168%", left: "90%" }, opacity: 0.11 },

        // Third viewport (200-300%)
        { component: ChartsAIIcon, size: 22, position: { top: "200%", left: "15%" }, opacity: 0.13 },
        { component: CRMIcon, size: 18, position: { top: "220%", right: "20%" }, opacity: 0.12 },
        { component: StockMarketIcon, size: 20, position: { top: "240%", left: "40%" }, opacity: 0.14 },
        { component: PaymentAggregatorIcon, size: 24, position: { top: "260%", right: "10%" }, opacity: 0.15 },
        { component: AnalyticsIcon, size: 16, position: { top: "280%", left: "70%" }, opacity: 0.11 },
        { component: DatabaseIcon, size: 26, position: { top: "210%", left: "60%" }, opacity: 0.13 },
        { component: SecurityIcon, size: 20, position: { top: "250%", left: "25%" }, opacity: 0.12 },
        { component: WebIcon, size: 22, position: { top: "270%", right: "30%" }, opacity: 0.14 },
        { component: CloudIcon, size: 18, position: { top: "290%", left: "45%" }, opacity: 0.13 },

        // Fourth viewport (300-400%)
        { component: CRMIcon, size: 22, position: { top: "320%", right: "25%" }, opacity: 0.12 },
        { component: ChartsAIIcon, size: 20, position: { top: "340%", left: "60%" }, opacity: 0.14 },
        { component: PaymentAggregatorIcon, size: 24, position: { top: "360%", left: "20%" }, opacity: 0.15 },
        { component: StockMarketIcon, size: 18, position: { top: "380%", right: "15%" }, opacity: 0.12 },
        { component: DashboardIcon, size: 20, position: { top: "310%", left: "40%" }, opacity: 0.13 },
        { component: AnalyticsIcon, size: 16, position: { top: "350%", right: "40%" }, opacity: 0.11 },
        { component: DatabaseIcon, size: 22, position: { top: "370%", left: "70%" }, opacity: 0.14 },
    ];

    return (
        <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden" style={{ height: "400vh" }}>
            {techIcons.map((icon, index) => {
                const IconComponent = icon.component;
                return (
                    <div
                        key={`icon-${index}`}
                        className="absolute text-[#F7B006]"
                        style={{
                            ...icon.position,
                            opacity: icon.opacity,
                        }}
                    >
                        <IconComponent
                            size={icon.size}
                            className="select-none"
                        />
                    </div>
                );
            })}

            {/* Static particles distributed throughout the page */}
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-[#F7B006] rounded-full opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 400}%`,
                    }}
                />
            ))}
        </div>
    );
}

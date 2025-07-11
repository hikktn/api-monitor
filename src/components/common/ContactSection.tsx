import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getContactConfig } from '../../utils/config';
import type { ContactConfig } from '../../types/config';

// 图标映射
const iconMap = {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
};

export const ContactSection: React.FC = () => {
    const config: ContactConfig = getContactConfig();
    const [copiedStatus, setCopiedStatus] = useState<Record<string, boolean>>({});

    const handleCopy = (text: string) => {
        setCopiedStatus({ [text]: true });
        setTimeout(() => {
            setCopiedStatus(prev => {
                const newStatus = { ...prev };
                delete newStatus[text];
                return newStatus;
            });
        }, 2000);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {config.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {config.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {config.contactMethods.map((method) => {
                        const Icon = iconMap[method.icon as keyof typeof iconMap];
                        const isCopied = copiedStatus[method.value];

                        return (
                            <div
                                key={method.title}
                                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.bgColor} mb-4`}>
                                    <Icon className={`w-6 h-6 ${method.color}`} />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {method.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    {method.description}
                                </p>

                                <div className="relative flex items-center group/copy z-10">
                                    <a
                                        href={method.href}
                                        className={`inline-flex items-center font-medium ${method.color} hover:underline`}
                                    >
                                        {method.value}
                                    </a>
                                    <CopyToClipboard text={method.value} onCopy={() => handleCopy(method.value)}>
                                        <button className="ml-2 p-1 opacity-0 group-hover/copy:opacity-100 transition-opacity duration-300 hover:bg-gray-100 rounded-md">
                                            {isCopied ? (
                                                <Check className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-500" />
                                            )}
                                        </button>
                                    </CopyToClipboard>
                                    {isCopied && (
                                        <div className="absolute left-0 -bottom-6 text-xs text-green-500 bg-green-100 px-2 py-1 rounded-md">
                                            已复制!
                                        </div>
                                    )}
                                </div>

                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* 工作时间 */}
                <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center justify-center mb-6">
                        <Clock className="w-6 h-6 text-gray-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">
                            工作时间
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        {config.workingHours.map((schedule) => (
                            <div key={schedule.day} className="bg-white rounded-lg p-4">
                                <div className="font-medium text-gray-900 mb-1">
                                    {schedule.day}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {schedule.hours}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            <MapPin className="inline w-4 h-4 mr-1" />
                            {config.timezone.text} ({config.timezone.code})
                        </p>
                    </div>
                </div>

                {/* 快速响应承诺 */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            {config.responseTime.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            {config.responseTime.commitments.map((commitment) => (
                                <div key={commitment.type}>
                                    <div className={`font-medium ${commitment.color} mb-1`}>
                                        {commitment.type}
                                    </div>
                                    <div className="text-gray-600">
                                        {commitment.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 
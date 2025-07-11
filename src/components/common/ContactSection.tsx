import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
    const contactMethods = [
        {
            icon: Mail,
            title: '邮箱联系',
            description: '项目咨询与商务合作',
            value: 'hello@designer.com',
            href: 'mailto:hello@designer.com',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: Phone,
            title: '电话咨询',
            description: '紧急项目与技术支持',
            value: '+86 138 0013 8000',
            href: 'tel:+8613800138000',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: MessageCircle,
            title: '在线沟通',
            description: '实时交流与问题解答',
            value: '微信: Designer_JD',
            href: '#',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        }
    ];

    const workingHours = [
        { day: '周一 - 周五', hours: '9:00 - 18:00' },
        { day: '周六', hours: '10:00 - 16:00' },
        { day: '周日', hours: '休息日' }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        让我们开始对话
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        无论是项目咨询、技术交流还是创意讨论，我都很乐意与您连接。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {contactMethods.map((method) => (
                        <div
                            key={method.title}
                            className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.bgColor} mb-4`}>
                                <method.icon className={`w-6 h-6 ${method.color}`} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {method.title}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {method.description}
                            </p>

                            <a
                                href={method.href}
                                className={`inline-flex items-center font-medium ${method.color} hover:underline`}
                            >
                                {method.value}
                            </a>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
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
                        {workingHours.map((schedule) => (
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
                            基于上海时区 (UTC+8)
                        </p>
                    </div>
                </div>

                {/* 快速响应承诺 */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            快速响应承诺
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <div className="font-medium text-blue-600 mb-1">邮件回复</div>
                                <div className="text-gray-600">24小时内</div>
                            </div>
                            <div>
                                <div className="font-medium text-green-600 mb-1">电话回拨</div>
                                <div className="text-gray-600">4小时内</div>
                            </div>
                            <div>
                                <div className="font-medium text-purple-600 mb-1">项目报价</div>
                                <div className="text-gray-600">48小时内</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 